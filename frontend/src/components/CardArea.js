import React from 'react';
import { Card } from './Card';
import './CardArea.css'

export class CardArea extends React.Component {

  render() {
    return (
      <div className='cardArea'>
        <div className='tableArea'>
          <div className='blackCardContainer'>
            <Card type='black' text={this.props.blackCard.content} mark={this.props.blackCard.mark}>
              {this.props.blackCard.children}
            </Card>
          </div>
          <div className='playedCardArea'>
            {this.props.playedCards && this.props.playedCards.map((card, index) => {
              return (
                <React.Fragment>
                  <Card type='white' text={card.content} mark={card.mark} onclick={_ => this.props.playedCardsClicked(index)} key={card.content + "" + index} chosen={card.chosenByCzar} />
                </React.Fragment>
              )
            })}
          </div>
          {
            this.props.sidebar &&
            <div className='sidebarContainer'>
              <div className='sidebarContent'>
                {this.props.sidebar}
              </div>
            </div>
          }
        </div>

        <div className='whiteCardContainer'>
          {this.props.isCzar &&
            <div className="czarContainer">
              <div className="czarBackdrop">
                <span className="czarPrompt">You are the Czar!</span>
              </div>
            </div>
          }
          {this.props.whiteCards && this.props.whiteCards.map((card, index) => {
            return <Card type='white' text={card.content} mark={card.mark} onclick={_ => this.props.whiteCardClicked(index)} key={card.content + "" + index} />
          })}
        </div>
      </div>
    );
  }
}