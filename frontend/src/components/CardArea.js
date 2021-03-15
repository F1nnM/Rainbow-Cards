import React from 'react';
import { Card } from './Card';
import './CardArea.css'

export class CardArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }

  render() {
    return (
      <div className='cardArea'>
        <div className='blackCardContainer'>
          <Card type='black' text={this.state.blackCard} />
        </div>
        <div className='whiteCardContainer'>
          {this.state.whiteCards.map((card, index) => {
            return <Card type='white' text={card} onclick={_ => this.state.whiteCardClicked(index)}/>
          })}
        </div>
      </div>
    );
  }
}