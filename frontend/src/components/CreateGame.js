import React from 'react';
import { withRouter } from "react-router-dom";

class CreateGame extends React.Component {

  onclick(me){
    this.props.client.joinOrCreate('game').then(room => {
      console.log(room.sessionId, "joined", room.name);
      localStorage.setItem('roomId', room.id)
      localStorage.setItem('sessionId', room.sessionId);
      room.leave()
      me.props.history.push("/game");
    }).catch(error =>{
      alert("Error! See console for details.")
      alert(error)
      console.log(error)
    });
  }

  render() {
    return (
      <button onClick={_=>this.onclick(this)}>Start Game</button>
    );
  }
}

export default withRouter(CreateGame)