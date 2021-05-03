import React from 'react';
import { withRouter } from 'react-router';
import { CardArea } from "./CardArea";
import Scoreboard from './Scoreboard';

import './Game.scss'
class Game extends React.Component {

  constructor(props) {
    super(props);
    if (props.room) {
      console.log("Room was supplied by props")
      this.state = { game: null, sessionId: props.room.sessionId, room: props.room, roomId: props.room.id }
    } else {
      let sessionId;
      let roomId;
      if (this.props.location.search.length === 10)
        roomId = this.props.location.search.substring(1)
      else {
        sessionId = localStorage.getItem('sessionId')
        roomId = localStorage.getItem('roomId')
      }
      this.state = { game: null, sessionId: sessionId, room: null, roomId: roomId }
    }

  }

  joinedGame(me, room) {

    localStorage.setItem('roomId', room.id)
    localStorage.setItem('sessionId', room.sessionId)
    this.props.setRoom(room)

    room.onStateChange.once((gameState) => me.setState({ ...me.state, game: gameState }));

    room.onStateChange((gameState) => {
      me.setState({ ...me.state, game: gameState })
      console.log("________NEW STATE_____________")
      console.log(gameState)
    });

    room.onLeave((code) => {
      console.log("client left the room, code: " + code);
      this.joinGame()
    });

    room.onError((code, message) => {
      alert("ROOM ERROR (" + code + "):\n" + message)
      console.log(code)
      console.log(message);
    });
  }

  clearGameAfterError() {
    localStorage.removeItem('sessionId')
    localStorage.removeItem('roomId')
    this.props.setRoom(null)
    this.props.history.replace("/")
  }

  joinGame(me = this) {
    console.log("joining init")
    if (!me.state.roomId)
      me.clearGameAfterError()
    else if (me.state.sessionId) {
      console.log("reconnecting")

      me.props.client.reconnect(me.state.roomId, me.state.sessionId).then(room => {
        console.log(room.sessionId, "joined", room.name);
        me.joinedGame(me, room)
      }).catch(e => {
        if (e.message.match(/room "[^"]*" not found/gi)) {
          alert("Couldn't find the selected room!")
          me.clearGameAfterError()
        } else if (e.message.match(/session expired:/gi)) {
          alert("Your game session for this room has expired!")
          me.clearGameAfterError()
        }
        else {
          console.log(e.message)
          alert("RECONNECT Error, see console for details. Retrying in 10 seconds.")
          setTimeout(_ => me.joinGame(this), 10_000)
        }
      });

    } else {
      console.log("new connection")

      this.props.client.joinById(this.state.roomId, { name: localStorage.getItem("name") }).then(room => {
        console.log(room.sessionId, "joined", room.name);
        this.joinedGame(this, room)
      }).catch(e => {
        alert("GAME JOIN ERROR, see console for details.")
        this.clearGameAfterError()
      });

    }
  }

  componentDidUpdate() {
    if ( this.props.client && !this.props.room)
      this.joinGame()
  }

  componentDidMount() {
    if (this.props.client) {
      if (this.props.room)
        this.joinedGame(this, this.props.room)
      else
        this.joinGame()
    }
  }

  componentWillUnmount() {
    console.log("Unmounting")
    if (this.props.room) {
      this.props.room.removeAllListeners()
      this.props.room.leave()
      this.props.setRoom(null)
    }
  }

  startGame() {
    this.props.room.send("startGame")
  }

  playCard(me, index) {
    me.props.room.send("playCard", { index: index })
  }

  czarVote(me, index) {
    me.props.room.send("czarVote", { index: index })
  }

  replaceHand() {
    this.props.room.send("replaceHand")
  }

  skipRound() {
    this.props.room.send("skipRound")
  }

  render() {
    if (!this.props.room || !this.state.game)
      return <div></div>
    let player = this.state.game.players[this.props.room.sessionId];

    let blackcardText = this.state.game.winner ? 'And the winner is [[BLANK]]' : this.state.game.blackCard.content || "Invite players with the code: "
    let blackcardChildren = this.state.game.gameRunning ? null : (
      <div>
        <input value={this.state.roomId} />
        <button onClick={() => { navigator.clipboard.writeText(this.state.roomId) }}>Copy Code</button>
        {/*<button onClick={() => {navigator.clipboard.writeText(window.location.origin+"/#/game?"+this.state.roomId)}}>Copy Link</button> */}
      </div>);
    let blackcard = { content: blackcardText, children: blackcardChildren, mark: this.state.game.blackCard.mark }

    let playedCards = this.state.game.winner ? [{ cards: [{ content: this.state.game.players[this.state.game.winner].name, mark: "WIN" }], chosenByCzar: true }] : this.state.game.cardsPlayed

    let sidebar =
      <div>
        <Scoreboard players={Array.from(this.state.game.players.values())} gameRunning={this.state.game.gameRunning} winner={this.state.game.winner || this.state.game.roundWinner} />
        {!this.state.game.gameRunning && player.isOwner && !this.state.game.winner && <button onClick={_ => this.startGame()}>Start Game</button>}
        {this.state.game.gameRunning && player.isOwner && <button onClick={_ => this.skipRound()}>Skip Round</button>}
      </div>

    return (

      <CardArea
        confirm={true}
        blocker={this.state.game.winner ? 'Game over' : player.isCzar ? (this.state.game.czarsTurn ? "It's you're turn to vote!" : "You are the czar!") : this.state.game.czarsTurn ? "It's the czars turn to vote" : null}
        enablePlayedCards={player.isCzar && !this.state.game.czarDidVote}
        blackCard={blackcard}
        whiteCards={player.cards}
        whiteCardClicked={index => this.playCard(this, index)}
        playedCards={playedCards}
        playedCardsClicked={index => this.czarVote(this, index)}
        sidebar={sidebar}
        trustPlayedCards={!this.state.game.winner}
        additionalSpace={<button hidden={!this.state.game.gameRunning} className='replaceHandButton' onClick={_ => this.replaceHand()} disabled={this.state.game.czarsTurn || player.isCzar || player.cards.length === 0}>Replace hand instead of playing a card</button>} />
    );
  }
}

export default withRouter(Game)