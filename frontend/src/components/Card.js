import React from 'react';
import './Card.css'

export class Card extends React.Component {

  render() {
    return (
      <button className={`card aspect-ratio-box ${this.props.type} ${this.props.chosen?'chosen':''}`} onClick={this.props.onclick}>
        <div className='aspect-ratio-box-inner'>
          {this.props.text && <span>{this.props.text.replace('[[BLANK]]', '________')}</span>}
          {this.props.children && (
            <div style={this.props.style}>
              {this.props.children}
            </div>
          )}
        </div>
      </button>
    );
  }
}