import React from 'react';


import './Scoreboard.css'
export default class Scoreboard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
      console.log(this.props.players)
    return (
      <div className="scoreboard">
          {this.props.players.map(player => {
              return (
              <div className="player">{player.name}: {player.score} {!player.connected?player.left?'(Left)':'(Disconnected)':''}</div>
              )
          })}
      </div>
    );
  }
}
