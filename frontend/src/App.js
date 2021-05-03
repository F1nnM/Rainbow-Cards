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
import './App.scss';
import * as Colyseus from 'colyseus.js'
import { env } from './config';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { client: null, room: null, theme: "dark", serverList: [], selectedServer: null, serverDropdownValue: null }
  }

  setRoom(me, room) {
    me.setState({ ...me.state, room })
    console.log("Updated room")
  }

  leaveGame() {
    this.props.history.push("/")
  }

  componentDidMount() {
    fetch(`${env.REACT_APP_MASTER_BACKEND_USE_HTTPS ? 'https' : 'http'}://${env.REACT_APP_MASTER_BACKEND}/getServerList`)
      .then(response => response.json())
      .then(data => {
        let client = new Colyseus.Client(`${data[0].ssl ? 'wss' : 'ws'}://${data[0].url}`)
        this.setState({ ...this.state, serverList: data, client, selectedServer: data[0] })
      });
  }

  setServer(serverIndex) {
    let server;
    if(serverIndex === "custom"){
      server = {
        url: prompt('URL of the server (optional: with port)? Example: "rainbow-cards-backend-backend.mfinn.de"'),
        ssl: prompt('Does the server use ssl? (true / false)').match(/true/gi)
      }
    } else {
      server = this.state.serverList[serverIndex]
    }

    let url = (server.ssl?'wss://': 'ws://')+server.url
    
    let client = new Colyseus.Client(url)
    this.setState({ ...this.state, client, selectedServer: server, serverDropdownValue: serverIndex})
  }

  render() {

    let isHome = this.props.location.pathname === "/";

    // let serverSwitcher = (
    //   <div>
    //     Server: 
    //     <select onChange={e => this.setServer(e.target.value)} value={this.state.serverDropdownValue}>
    //       {this.state.serverList.map((server, index) => {
    //         return (
    //           <option key={server.name} value={index}>
    //             {server.name}
    //           </option>
    //         );
    //       })}
    //       <option value="custom">Custom</option>
    //     </select>
    //   </div>
    // )
    let serverSwitcher = null; // not yet required

    return (
      <div className={`App ${this.state.theme}`}>
        <Header showHome={!isHome} center={isHome ? serverSwitcher : null} theme={this.state.theme} setTheme={(theme) => this.setState({ ...this.state, theme })} />
        <Switch>
          <Route path="/create">
            <CreateGame client={this.state.client} server={this.state.selectedServer} setRoom={(room) => this.setRoom(this, room)} />
          </Route>
          <Route path="/game">
            <Game client={this.state.client} room={this.state.room} setRoom={(room) => this.setRoom(this, room)} />
          </Route>
          <Route path="/public_games">
            <GamesList client={this.state.client} />
          </Route>
          <Route path="/">
            <MainMenu />
          </Route>
        </Switch>
      </div>
    );
  }

}

export default withRouter(App);
