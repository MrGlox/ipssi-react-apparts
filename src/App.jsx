import React, { Component } from "react";

import Apparts from "containers/Apparts";
import Clock from "containers/Clock";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Clock></Clock>
          <Apparts></Apparts>
        </header>
      </div>
    );
  }
}

export default App;
