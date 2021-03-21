import React from 'react';
import { CardArea } from "./CardArea";
import { withRouter } from "react-router-dom";

class MainMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = { name: localStorage.getItem("name") || "Anonymous"};
  }

  whiteCardClicked(me, index){
    switch (index){
      case 0:
        me.props.history.push("/public_games");
        break;
      case 1:
        this.joinPrivate()
        me.props.history.push("/game");
        break;
      case 2:
        me.props.history.push("/create");
        break;
      case 3:
        me.props.history.push("/game");
        break;
      default:
        break;
    }
  }

  joinPrivate(){
    let roomId = prompt("Enter the game code:")
    if (!roomId || roomId.length !== 9){
      alert("Invalid code! A valid one is 9 characters long")
      return;
    }
    if (roomId !== localStorage.getItem("roomId")){
      localStorage.setItem("roomId", roomId);
      localStorage.removeItem("sessionId");
    }
  }

  render() {

    let whiteCards = [{content: "Join a public game"}, {content: "Join a private game"}, {content: "Create a new game"}]
    if (localStorage.getItem("roomId"))
      whiteCards.push({content: "Rejoin the last game (might be closed already)"})

    let sidebar = (
      <div>
        <span>Set your name:</span>
        <input value={this.state.name} onChange={e => {this.setState({...this.state, name: e.target.value})}}/><button onClick={_=>localStorage.setItem("name", this.state.name)}>Set</button>
      </div>
    )

    return (
      <CardArea sidebar={sidebar} blackCard={{content: "I'd like to [[BLANK]]"}} whiteCards={whiteCards} whiteCardClicked={index => this.whiteCardClicked(this, index)} />
    );
  }
}

export default withRouter(MainMenu)