import React from 'react';
import { CardArea } from "./CardArea";

export class MainMenu extends React.Component {

  whiteCardClicked(index){
    console.log(index)
  }

  render() {
    return (
      <CardArea blackCard="I'd like to [[BLANK]]" whiteCards={["Join a public game", "Join a private game", "Create a new game"]} whiteCardClicked={this.whiteCardClicked} />
    );
  }
}