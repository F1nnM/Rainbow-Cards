import React from 'react';
import { withRouter } from "react-router-dom";
import './CreateGame.scss'

class CreateGame extends React.Component {

  constructor(props) {
    super(props);
    this.state = { sets: [], currentTotalWhite: Infinity, currentTotalBlack: Infinity, maxPlayers: 10, private: false, pointsNeeded: 10 }
    console.log(props.server)
  }

  componentDidMount() {
    if (!this.props.server){
      this.props.history.push("/")
      return;
    }
    fetch(`${this.props.server.ssl ? 'https' : 'http'}://${this.props.server.url}/getCards`)
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
        this.setState({ ...this.state, sets: data, currentTotalWhite, currentTotalBlack })
      });
  }

  onclick(me) {
    let selectedSets = []
    for (let set in this.state.sets) {
      if (this.state.sets[set].checked)
        selectedSets.push(set)
    }
    this.props.client.create('game', { maxPlayers: this.state.maxPlayers, pointsNeeded: this.state.pointsNeeded, sets: selectedSets, private: this.state.private, name: localStorage.getItem("name") }).then(room => {
      console.log(room.sessionId, "joined", room.name);
      me.props.setRoom(room)
      me.props.history.push("/game")
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
    this.setState((previousState) => {
      return { ...previousState, sets: newSets, currentTotalWhite: newTotalBlack, currentTotalBlack: newTotalWhite }
    })
  }

  render() {
    let warnCards = this.state.currentTotalBlack < 20 || this.state.currentTotalWhite < 200
    return (
      <div className="container">
        <div className="options">
          <h2>Sets to use</h2>
          <div className="checkboxContainer">
            {Object.entries(this.state.sets).map(([set, metadata]) => {
              return (
                <div className="checkboxWithLabel" key={set}>
                  <input type="checkbox" checked={metadata.checked} onChange={e => this.toggleSelection(this, set)} />
                  <label>{set}</label>
                </div>)
            })}
          </div>
        </div>
        <div className={`options ${warnCards ? 'warn' : ''}`}>
          <span>Current number of cards: Black: {this.state.currentTotalBlack} White: {this.state.currentTotalWhite}</span>
          {warnCards && <span>We recommend playing with at least 20 black and 200 white cards!</span>}
        </div>
        <div className="options">
          <label>Max. number of players:</label>
          <input type="number" min="3" max="50" value={this.state.maxPlayers} onChange={e => this.setState({ ...this.state, maxPlayers: parseInt(e.target.value) })} />
        </div>
        <div className="options">
          <label>Points needed to win: </label>
          <input type="number" min="1" max="50" value={this.state.pointsNeeded} onChange={e => this.setState({ ...this.state, pointsNeeded: parseInt(e.target.value) })} />
        </div>
        <div className="options">
          <label>Make this game private: </label>
          <input type="checkbox" checked={this.state.private} onChange={e => this.setState({ ...this.state, private: e.target.checked })} />
        </div>
        <button onClick={_ => this.onclick(this)} className="start-button options">Start Game</button>
      </div>
    );
  }
}

export default withRouter(CreateGame)