import React from 'react';
import { withRouter } from 'react-router';
import { Card } from './Card';
import { CardArea } from "./CardArea";

class Game extends React.Component {

  constructor(props) {
    super(props);
    let sessionId;
    let roomId;
    if (this.props.location.search.length === 10) {
      sessionId = null
      roomId = this.props.location.search.substring(1)
    } else {
      sessionId = localStorage.getItem('sessionId')
      roomId = localStorage.getItem('roomId')
    }
    this.state = { game: null, sessionId: sessionId, room: null, roomId: roomId }
  }

  joinGame() {
    function gameJoinSuccess(me, room) {
      localStorage.setItem('sessionId', room.sessionId)
      me.setState({ ...me.state, room: room })
      room.onStateChange.once((gameState) => {
        me.setState({ ...me.state, game: gameState })
      });
      room.onStateChange((gameState) => {
        console.log("New state")
        console.log(gameState)
        me.setState({ ...me.state, game: gameState })
      });
      room.onLeave((code) => {
        console.log("client left the room, code: " + code);
        me.joinGame()
      });
      room.onError((code, message) => {
        alert("ROOM ERROR, check console for details")
        console.log(message);
      });
    }

    function gameJoinError(me, error) {
      console.log("JOIN ERROR", error);
      localStorage.removeItem('sessionId')
      localStorage.removeItem('roomId')
      alert("JOIN ERROR! Check console for more details.")
      me.props.history.replace("/")
    }

    if (!this.state.roomId)
      this.props.history.replace("/");
    else if (this.state.sessionId) {
      console.log("reconnecting")
      this.props.client.reconnect(this.state.roomId, this.state.sessionId).then(room => {
        console.log(room.sessionId, "joined", room.name);
        gameJoinSuccess(this, room)
      }).catch(e => gameJoinError(this, e));
    } else {
      console.log("new connection")
      this.props.client.joinById(this.state.roomId).then(room => {
        console.log(room.sessionId, "joined", room.name);
        gameJoinSuccess(this, room)
      }).catch(e => gameJoinError(this, e));
    }
  }

  componentDidMount() {
    this.joinGame()
  }

  componentWillUnmount() {
    console.log("Unmounting")
    if (this.state.room)
      this.state.room.leave()
  }

  startGame() {
    this.state.room.send("startGame")
  }

  playCard(me, index) {
    me.state.room.send("playCard", { index: index })
  }

  czarVote(me, index) {
    me.state.room.send("czarVote", { index: index })
  }

  render() {
    if (!this.state.room || !this.state.game)
      return <div></div>
    let player = this.state.room.sessionId;

    let blackcardText = this.state.game.blackCard || "Invite players with the code: " + this.state.roomId
    let blackCardChildren;
    if (this.state.game.owner === player && !this.state.game.gameRunning)
      blackCardChildren = <button onClick={_ => this.startGame()}>Start Game</button>
    let blackcard = { text: blackcardText, children: blackCardChildren }

    return (
      <CardArea 
        blackCard={blackcard}
        whiteCards={this.state.game.players[player].cards}
        whiteCardClicked={ index => this.playCard(this, index)}
        playedCards={this.state.game.cardsPlayed}
        playedCardsClicked={index => this.czarVote(this, index)}/>
    );
  }
}

export default withRouter(Game)