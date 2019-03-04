import React, { Component } from 'react';
import './App.css';
import Header from "./components/header";
import Game from "./components/game";
import Tail from "./components/tail";

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header></Header>
      <Game></Game>
      <Tail></Tail>
      </div>
    );
  }
}

export default App;
