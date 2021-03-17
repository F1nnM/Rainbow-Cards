import React from 'react';
import { withRouter } from 'react-router';
import { CardArea } from "./CardArea";

class Game extends React.Component {

  constructor(props) {
    super(props);

    this.state = {game: null, sessionId: null}
  }


  componentDidMount(){
    function gameJoinSuccess(me, room) {
      localStorage.setItem('sessionId', room.sessionId)
      me.setState({...me.state, room: room})
      room.onStateChange.once((gameState) => {
        me.setState({...me.state, game: gameState})
      });
      room.onStateChange((gameState) => {
        console.log("New state")
        me.setState({...me.state, game: gameState})
      });
    }

    function gameJoinError(me, error) {
      console.log("JOIN ERROR", error);
      localStorage.removeItem('sessionId')
      localStorage.removeItem('roomId')
      alert("JOIN ERROR! Check console for more details.")
      me.props.history.replace("/")
    }

    let sessionId = localStorage.getItem('sessionId')
    let roomId = localStorage.getItem('roomId')

    if (!roomId)
      this.props.history.replace("/");
    else if (sessionId) 
      this.props.client.reconnect(roomId, sessionId).then(room => {
        console.log(room.sessionId, "joined", room.name);
        gameJoinSuccess(this, room)
      }).catch(e => gameJoinError(this, e));
    else
      this.props.client.joinById(roomId).then(room => {
          console.log(room.sessionId, "joined", room.name);
          gameJoinSuccess(this, room)
      }).catch(e => gameJoinError(this, e));
  }

  componentWillUnmount(){
    if(this.state.room)
      this.state.room.leave()
  }

  render() {
    if (!this.state.room || !this.state.game)
      return <div></div>
    let player = this.state.room.sessionId;
    return (
      <CardArea blackCard={this.state.game.blackCard} whiteCards={this.state.game.players[player].cards} />
    );
  }
}

export default withRouter(Game)