import React from 'react';
import './Header.css'

export class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <span>Yet another <a href="https://cardsagainsthumanity.com/">Cards against Humanity</a> clone.</span>
      </div>
    );
  }
}