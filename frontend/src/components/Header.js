import React from 'react';
import './Header.scss'

import { withRouter } from 'react-router';

import BrightnessHigh from '@material-ui/icons/BrightnessHigh'
import Brightness4 from '@material-ui/icons/Brightness4'
import GitHub from '@material-ui/icons/GitHub'
import Home from '@material-ui/icons/Home'


class Header extends React.Component {

  toggleTheme(me){
    me.props.setTheme(me.props.theme==="dark"?"light":"dark")
  }

  render() {
    return (
      <div className="header">
        {this.props.showHome &&
          <div className="homeContainer" onClick={_ => this.props.history.push("/")}>
            <Home className="homeIcon"/>
          </div>
        }
        <span><span className="rainbow">Rainbow</span> cards</span>
        <div className="spreader" />
        <div className="center">
          {this.props.center}
        </div>
        <div className="spreader" />
        <div className="themeToggle">
          <button className="themeToggleButton" onClick={_=>this.toggleTheme(this)}>
              {this.props.theme==="dark" && <BrightnessHigh/>}
              {this.props.theme==="light" && <Brightness4/>}
          </button>
        </div>
        <span data-nosnippet>
          Infos and Licensing:
        </span>
        <div className="github">
          <a href="https://github.com/F1nnM/Yet-another-Cards-Against-Humanity-clone" target="_blank" rel="noreferrer">
            <GitHub/>
          </a>
        </div>
      </div>
    );
  }
}

export default withRouter(Header)