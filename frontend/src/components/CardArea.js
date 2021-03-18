import React from 'react';
import { Card } from './Card';
import './CardArea.css'

export class CardArea extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='cardArea'>
        <div class='tableArea'>
          <div className='blackCardContainer'>
            <Card type='black' text={this.props.blackCard.text}>
              {this.props.blackCard.children}
            </Card>
          </div>
            <div className='playedCardArea'>
            {this.props.playedCards && this.props.playedCards.map((card, index) => {
              return (
              <React.Fragment>
                <Card type='white' text={card.content} onclick={_ => this.props.playedCardsClicked(index)} key={card.content} chosen={card.chosenByCzar}/>
              </React.Fragment>
              )
            })}
          </div>
        </div>

        <div className='whiteCardContainer'>
          {this.props.whiteCards && this.props.whiteCards.map((card, index) => {
            return <Card type='white' text={card} onclick={_ => this.props.whiteCardClicked(index)} key={card}/>
          })}
        </div>
      </div>
    );
  }
}