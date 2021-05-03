import React from 'react';
import { Card } from './Card';
import './CardArea.scss'

export class CardArea extends React.Component {

  constructor(props) {
    super(props);
    this.state = { selectedCard: null };
  }

  whiteCardClicked(me, index){
    if(me.props.confirm)
      if(me.state.selectedCard===index){
        me.setState({...me.state, selectedCard: null})
        me.props.whiteCardClicked(index)
      }else
        me.setState({...me.state, selectedCard: index})
    else
      me.props.whiteCardClicked(index)
  }

  render() {
    return (
      <div className='cardArea'>
        <div className='tableArea'>
          <div className='blackCardContainer'>
            <Card trust={true} type='black' text={this.props.blackCard.content} mark={this.props.blackCard.mark}>
              {this.props.blackCard.children}
            </Card>
          </div>
          <div className={'playedCardArea ' + (this.props.enablePlayedCards ? '' : 'blocked')}>
            {this.props.playedCards && this.props.playedCards.map((cardsStack, index) => {
              return (
                <div className="cardGroup" key={index}>
                  {cardsStack["cards"].map((card, innerIndex) => {
                    return (
                      <Card
                        sticky={innerIndex > 0}
                        trust={this.props.trustPlayedCards}
                        type='white' text={card.content} mark={card.mark}
                        onclick={_ => this.props.playedCardsClicked(index)}
                        key={card.content + "" + index + Math.random()} // Random: Fix for ghost cards appearing
                        chosen={cardsStack.chosenByCzar} />
                    )
                  })}
                </div>
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
          {this.props.blocker &&
            <div className="czarContainer">
              <div className="czarBackdrop">
                <span className="czarPrompt">{this.props.blocker}</span>
              </div>
            </div>
          }
          {this.props.whiteCards && this.props.whiteCards.map((card, index) => {
            return <Card
              raised={this.state.selectedCard === index}
              trust={true}
              type='white'
              text={card.content}
              mark={card.mark}
              onclick={_ => this.whiteCardClicked(this, index)}
              key={card.content + "" + index} />
          })}
        </div>
        <div className='additionalSpace'>
          {this.props.blocker &&
            <div className="czarContainer"/>
          }
          {this.props.additionalSpace}
        </div>
      </div>
    );
  }
}