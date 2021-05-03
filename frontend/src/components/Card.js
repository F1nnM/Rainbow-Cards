import React from 'react';
import './Card.scss'

export class Card extends React.Component {

  render() {
    let text = this.props.text? this.props.text.replaceAll('[[BLANK]]', '____'):null
    return (
      <button className={`card aspect-ratio-box ${this.props.type} ${this.props.chosen ? 'chosen' : ''} ${this.props.sticky ? 'sticky' : ''} ${this.props.raised?'raised':''}`} onClick={this.props.onclick}>
        <div className='aspect-ratio-box-inner'>
          {this.props.text && this.props.trust && <span dangerouslySetInnerHTML={{__html: text}}></span>}
          {this.props.text && (this.props.trust || <span>{text}</span>)}
          {this.props.children && (
            <div className="children" style={this.props.style}>
              {this.props.children}
            </div>
          )}
          {this.props.mark &&
          <div className="mark">
            <span>{this.props.mark}</span>
          </div>
        }
        </div>
      </button>
    );
  }
}