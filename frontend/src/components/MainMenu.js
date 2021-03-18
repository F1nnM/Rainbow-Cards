import React from 'react';
import { CardArea } from "./CardArea";
import { withRouter } from "react-router-dom";

class MainMenu extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = { ...props};
  // }

  whiteCardClicked(me, index){
    switch (index){
      case 0:
        me.props.history.push("/public_games");
        break;
      case 1:
        let oldRoomId = localStorage.getItem("roomId");
        let roomId = prompt("Enter the game code:", oldRoomId)
        if (roomId.length !== 9){
          alert("Invalid code! A valid one is 9 characters long")
          break;
        }
        if (roomId!==oldRoomId){
          localStorage.setItem("roomId", roomId);
          localStorage.removeItem("sessionId");
        }
        me.props.history.push("/game");
        break;
      case 2:
        me.props.history.push("/create");
        break;
      default:
        break;
    }
  }

  render() {

    let whiteCards = ["Join a public game", "Join a private game", "Create a new game"]
    if (localStorage.getItem("roomId"))
      whiteCards[1] += " / rejoin the last game"

    return (
      <CardArea blackCard={{text: "I'd like to [[BLANK]]"}} whiteCards={whiteCards} whiteCardClicked={index => this.whiteCardClicked(this, index)} />
    );
  }
}

export default withRouter(MainMenu)