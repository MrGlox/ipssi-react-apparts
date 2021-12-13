import React, { Component } from "react";

import "./App.css";

import { Item } from "./components";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Appartments</h1>
          <Item title="Appartment 1" status={false}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
            exercitationem, placeat officiis blanditiis iusto asperiores omnis
            voluptatibus inventore consequatur facere magni odit voluptas illo
            cum maxime molestias eos? Placeat, eligendi.
          </Item>
        </header>
      </div>
    );
  }
}

export default App;
