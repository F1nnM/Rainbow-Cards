import React from 'react';
import './Header.css'

export class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <span>Yet another <a href="https://cardsagainsthumanity.com/">Cards against Humanity</a> clone.</span>
        <div className="spreader" />
        <div className=".github">
          <a href="https://github.com/F1nnM/Yet-another-Cards-Against-Humanity-clone" target="_blank" rel="noreferrer">
            <svg id="i-github" viewBox="0 0 64 64" height="25">
              <path strokeWidth="0" fill="white" d="M32 0 C14 0 0 14 0 32 0 53 19 62 22 62 24 62 24 61 24 60 L24 55 C17 57 14 53 13 50 13 50 13 49 11 47 10 46 6 44 10 44 13 44 15 48 15 48 18 52 22 51 24 50 24 48 26 46 26 46 18 45 12 42 12 31 12 27 13 24 15 22 15 22 13 18 15 13 15 13 20 13 24 17 27 15 37 15 40 17 44 13 49 13 49 13 51 20 49 22 49 22 51 24 52 27 52 31 52 42 45 45 38 46 39 47 40 49 40 52 L40 60 C40 61 40 62 42 62 45 62 64 53 64 32 64 14 50 0 32 0 Z" />
            </svg>
          </a>
        </div>
      </div>
    );
  }
}