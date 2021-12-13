import React, { Component } from "react";

import { List } from "./components";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Appartments</h1>
          <List />
        </header>
      </div>
    );
  }
}

export default App;
