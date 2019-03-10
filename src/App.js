import React, { Component } from "react";
import "./App.scss";
import { NavBar } from "./components/index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}

export default App;
