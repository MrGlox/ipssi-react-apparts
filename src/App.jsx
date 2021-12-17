import React, { Component } from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import Apparts from "containers/Apparts";
import Appart from "containers/Appart";
import Clock from "containers/Clock";
import FetchData from "containers/FetchData";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <header className="App__header">
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Apparts (Home)
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/clock"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Horloge
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/todo"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  To do
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/fetch-data"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Fetch data
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Apparts></Apparts>} />
          <Route path="clock" element={<Clock></Clock>} />
          <Route path="todo" element={<>This is to do</>} />
          <Route path="fetch-data" element={<FetchData></FetchData>} />
          <Route path="appart/:id" element={<Appart></Appart>} />
        </Routes>
      </div>
    );
  }
}

export default App;
