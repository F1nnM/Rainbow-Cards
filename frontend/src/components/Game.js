import React from 'react';
import { CardArea } from "./CardArea";

export class Game extends React.Component {
  render() {
    return (
      <CardArea blackCard="gamegamegame" whiteCards={["a"]} />
    );
  }
}