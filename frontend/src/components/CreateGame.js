import React from 'react';
import { withRouter } from "react-router-dom";

import './CreateGame.css'

class CreateGame extends React.Component {

  constructor(props) {
    super(props);
    this.state = { sets: [] }
  }

  componentDidMount() {
    fetch('http://dellfinnlin.fritz.box:2567/getCards')
      .then(response => response.json())
      .then(data => {
        let currentTotalWhite = 0;
        let currentTotalBlack = 0;
        for (let set in data) {
          if (data[set].checked) {
            currentTotalBlack += data[set].black;
            currentTotalWhite += data[set].white;
          }
        }
        this.setState({ ...this.state, sets: data, currentTotalWhite, currentTotalBlack, maxPlayers: 10, private: false })
      });
  }

  onclick(me) {
    let selectedSets = []
    for (let set in this.state.sets){
      if (this.state.sets[set].checked)
        selectedSets.push(set)
    }
    this.props.client.create('game', {maxPlayers: this.state.maxPlayers, sets: selectedSets, private: this.state.private, name: localStorage.getItem("name")}).then(room => {
      console.log(room.sessionId, "joined", room.name);
      localStorage.setItem('roomId', room.id)
      localStorage.setItem('sessionId', room.sessionId);
      room.leave()
      me.props.history.push("/game");
    }).catch(error => {
      alert("Error! See console for details.")
      console.log(error)
    });
  }

  toggleSelection(me, set) {
    let newSets = this.state.sets
    let newTotalBlack
    let newTotalWhite
    if (newSets[set].checked) {
      newSets[set].checked = false
      newTotalBlack = this.state.currentTotalBlack - newSets[set].black
      newTotalWhite = this.state.currentTotalWhite - newSets[set].white
    } else {
      newSets[set].checked = true
      newTotalBlack = this.state.currentTotalBlack + newSets[set].black
      newTotalWhite = this.state.currentTotalWhite + newSets[set].white
    }
    this.setState({ ...this.state, sets: newSets, currentTotalBlack: newTotalBlack, currentTotalWhite: newTotalWhite })
  }

  render() {
    let warnCards = this.state.currentTotalBlack<20 || this.state.currentTotalWhite<200
    return (
      <div>
        <div className="options">
          <h2>Sets to use</h2>
          <div className="checkboxContainer">
            {Object.entries(this.state.sets).map(([set, metadata]) => {
              return (
                <div className="checkboxWithLabel">
                  <input type="checkbox" checked={metadata.checked} onChange={e => this.toggleSelection(this, set)} />
                  <label>{set}</label>
                </div>)
            })}
          </div>
        </div>
        <div className={`options ${warnCards ? 'warn': ''}`}>
          <span>Current number of cards: Black: {this.state.currentTotalBlack} White: {this.state.currentTotalWhite}</span>
          {warnCards && <span>We recommend playing with at least 20 black and 200 white cards!</span>}
        </div>
        <div className="options">
          <label>Max. number of players:</label>
          <input type="number" min="3" max="50" value={this.state.maxPlayers} onChange={e => this.setState({...this.state, maxPlayers: e.target.value})}/>
        </div>
        <div className="options">
          <label>Make this game private: </label>
          <input type="checkbox" checked={this.state.private} onChange={e => this.setState({...this.state, private: e.target.checked})}/>
        </div>
        <button onClick={_ => this.onclick(this)} className="start-button">Start Game</button>
      </div>
    );
  }
}

export default withRouter(CreateGame)