import React from 'react';


import './Scoreboard.scss'
export default class Scoreboard extends React.Component {

  getAnnotation(me, player){
    let annotations = ""
    if (player.isOwner)
      annotations += "(Owner) "
    if (!player.connected)
      if (player.left)
        annotations += "(Left) "
      else
        annotations += "(Disconnected) "
    if (me.props.gameRunning && !player.played && !player.isCzar)
      annotations += "Waiting "
    if (player.isCzar)
      annotations += "Card-Czar "
    return annotations
  }

  render() {
    console.log(this.props.winner)
    return (
      <div className="scoreboard">
          {this.props.players.map((player, index) => {
              return (
              <div className={`player ${(player.id === this.props.winner) ? 'winner': ''}`} key={player.name+index}>
                <span className="name">
                  {player.name}: {player.score}
                </span>
                <span>
                  {this.getAnnotation(this, player)}
                </span>
              </div>
              )
          })}
      </div>
    );
  }
}
