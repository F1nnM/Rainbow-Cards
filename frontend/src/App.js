import { Header } from "./components/Header";
import { Game } from "./components/Game";
import MainMenu from "./components/MainMenu";
import { GamesList } from "./components/GamesList";
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/game">
            <Game />
          </Route>
          <Route path="/public_games">
            <GamesList />
          </Route>
          <Route path="/">
            <MainMenu />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
