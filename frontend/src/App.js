import React from 'react'
import Header from "./components/Header";
import Game from "./components/Game";
import MainMenu from "./components/MainMenu";
import GamesList from "./components/GamesList";
import CreateGame from './components/CreateGame';
import {
  Switch,
  Route,
  withRouter
} from "react-router-dom";
import './App.css';
import * as Colyseus from 'colyseus.js'
import { env } from './config';

class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {client: new Colyseus.Client(`${env.REACT_APP_USE_HTTPS?'wss':'ws'}://${env.REACT_APP_BACKEND}`), room: null, theme: "dark"}
  }

  setRoom(me, room) {
    me.setState({...me.state, room})
    console.log("Updated room")
  }

  leaveGame() {
    this.props.history.push("/")
  }



  render(){
    return (
      <div className={`App ${this.state.theme}`}>
        <Header showHome={this.props.location.pathname !== "/"} theme={this.state.theme} setTheme={(theme)=>this.setState({...this.state, theme})}/>
        <Switch>
          <Route path="/create">
            <CreateGame client={this.state.client} setRoom={(room) => this.setRoom(this, room)}/>
          </Route>
          <Route path="/game">
            <Game client={this.state.client} room={this.state.room} setRoom={(room) => this.setRoom(this, room)}/>
          </Route>
          <Route path="/public_games">
            <GamesList client={this.state.client}/>
          </Route>
          <Route path="/">
            <MainMenu />
          </Route>
        </Switch>
      </div>
    );
  }
  
}

export default  withRouter(App);
