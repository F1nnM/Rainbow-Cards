import React from 'react';
import { withRouter } from 'react-router';
import { Card } from './Card';

import './GamesList.scss'
class GamesList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {rooms: []}
  }

  componentDidMount(){
    this.props.client.getAvailableRooms().then(rooms => {
      this.setState({rooms: rooms})
    }).catch(e => {
      console.log(e)
      alert("Error! Check console for details.")
    })
  }

  openGame(roomId){
    if(localStorage.getItem("roomId") !== roomId){
      localStorage.removeItem("sessionId");
      localStorage.setItem("roomId", roomId);
    }
    this.props.history.push("/game");
  }

  render() {
    return (
      <div className="games-list">
        <button className="refresh-button" onClick={_=>window.location.reload()}>Refresh</button>
        <div>
          {this.state.rooms.map(room => {
            return (
              <Card type="white" style={{fontSize: "smaller"}} key={room.roomId} onclick={_=>{this.openGame(room.roomId)}}> 
                <span>{room.roomId}</span>
                <hr/>
                <span>Players:</span>
                <span>{room.clients} / {room.maxClients || "Inf"}</span>
                <span>{room.metadata}</span>
              </Card>
            )
          })}
        </div>
      </div>
    );
  }
}

export default withRouter(GamesList)