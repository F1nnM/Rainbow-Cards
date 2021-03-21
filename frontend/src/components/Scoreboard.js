import React from 'react';


import './Scoreboard.css'
export default class Scoreboard extends React.Component {

  render() {
      console.log(this.props.players)
    return (
      <div className="scoreboard">
          {this.props.players.map((player, index) => {
              return (
              <div className="player" key={player.name+index}>{player.name}{player.isOwner?" (Owner)": ""}: {player.score} {!player.connected?player.left?'(Left)':'(Disconnected)':''}</div>
              )
          })}
      </div>
    );
  }
}
