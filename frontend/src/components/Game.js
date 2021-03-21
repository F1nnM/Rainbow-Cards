import React from 'react';
import { withRouter } from 'react-router';
import { CardArea } from "./CardArea";
import Scoreboard from './Scoreboard';

class Game extends React.Component {

  constructor(props) {
    super(props);
    if (props.room) {
      console.log("Room was supplied by props")
      this.state = { game: null, sessionId: props.room.sessionId, room: props.room, roomId: props.room.id}
    }else {
      let sessionId;
      let roomId;
      if (this.props.location.search.length === 10)
        roomId = this.props.location.search.substring(1)
      else {
        sessionId = localStorage.getItem('sessionId')
        roomId = localStorage.getItem('roomId')
      }
      this.state = { game: null, sessionId: sessionId, room: null, roomId: roomId}
    }
    
  }

  joinedGame(me, room){

    localStorage.setItem('roomId', room.id)
    localStorage.setItem('sessionId', room.sessionId)
    this.props.setRoom(room)

    room.onStateChange.once((gameState) => me.setState({ ...me.state, game: gameState }));

    room.onStateChange((gameState) => me.setState({ ...me.state, game: gameState }));

    room.onLeave((code) => {
      console.log("client left the room, code: " + code);
      this.joinGame()
    });

    room.onError((code, message) => {
      alert("ROOM ERROR ("+code+"):\n"+message)
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

  joinGame() {
    if (!this.state.roomId)
      this.clearGameAfterError()
    else if (this.state.sessionId) {
      console.log("reconnecting")

      this.props.client.reconnect(this.state.roomId, this.state.sessionId).then(room => {
        console.log(room.sessionId, "joined", room.name);
        this.joinedGame(this, room)
      }).catch(e => {
        if ( e.message.match(/room "[^"]*" not found/gi)){
          alert("Couldn't find the selected room!")
          this.clearGameAfterError()
        } else if(e.message.match(/room "[^"]*" not found/gi)){
          alert("Your game session for this room has expired!")
          this.clearGameAfterError()
        }
        else{
          console.log(e.message)
          alert("RECONNECT Error, see console for details. Retrying in 10 seconds.")
          setTimeout(this.joinGame, 10_000)
        }
      });

    } else {
      console.log("new connection")

      this.props.client.joinById(this.state.roomId, {name: localStorage.getItem("name")}).then(room => {
        console.log(room.sessionId, "joined", room.name);
        this.joinedGame(this, room)
      }).catch(e => {
        alert("GAME JOIN ERROR, see console for details.")
        this.clearGameAfterError()
      });

    }
  }

  componentDidUpdate(){
    console.log("Updated Game")
  }

  componentDidMount() {
    if(this.props.room)
      this.joinedGame(this, this.props.room)
    else
      this.joinGame()
  }

  componentWillUnmount() {
    console.log("Unmounting")
    if (this.props.room){
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

  render() {
    if (!this.props.room || !this.state.game)
      return <div></div>
    let player = this.props.room.sessionId;

    let blackcardText = this.state.game.blackCard.content || "Invite players with the code: " + this.state.roomId
    let blackCardChildren;
    if (this.state.game.owner === player && !this.state.game.gameRunning)
      blackCardChildren = <button onClick={_ => this.startGame()}>Start Game</button>
    let blackcard = { content: blackcardText, children: blackCardChildren }

    return (
      <CardArea
        isCzar={this.state.game.players[player].isCzar}
        blackCard={blackcard}
        whiteCards={this.state.game.players[player].cards}
        whiteCardClicked={ index => this.playCard(this, index)}
        playedCards={this.state.game.cardsPlayed}
        playedCardsClicked={index => this.czarVote(this, index)}
        sidebar={<Scoreboard players={Array.from(this.state.game.players.values())}/>}/>
    );
  }
}

export default withRouter(Game)