import React from 'react';
import { CardArea } from "./CardArea";
import { withRouter } from "react-router-dom";

class MainMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = { ...props};
  }

  whiteCardClicked(me, index){
    console.log(me.state)
    switch (index){
      case 0:
        me.props.history.push("/public_games");
        break;
      case 1:
        me.props.history.push("/join");
        break;
      case 2:
        me.state.history.push("/create");
        break;
    }
  }

  render() {
    return (
      <CardArea blackCard="I'd like to [[BLANK]]" whiteCards={["Join a public game", "Join a private game", "Create a new game"]} whiteCardClicked={index => this.whiteCardClicked(this, index)} />
    );
  }
}

export default withRouter(MainMenu)