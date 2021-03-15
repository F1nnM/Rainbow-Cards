import React from 'react';
import './Card.css'

export class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props, text: props.text.replace('[[BLANK]]', '______') };
  }

  render() {
    return (
      <button className={`card aspect-ratio-box ${this.state.type}`} onClick={this.state.onclick}>
        <div className='aspect-ratio-box-inner'>
          <span>{this.state.text}</span>
        </div>
      </button>
    );
  }
}