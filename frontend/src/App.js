import React from 'react'
import { Header } from "./components/Header";
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

var client = new Colyseus.Client('ws://dellfinnlin.fritz.box:2567');

class App extends React.Component{

  render(){
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/create">
            <CreateGame client={client}/>
          </Route>
          <Route path="/game">
            <Game client={client}/>
          </Route>
          <Route path="/public_games">
            <GamesList client={client}/>
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
