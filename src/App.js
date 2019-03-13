import React, { Component } from "react";
import "./App.scss";
import {
  NavBarWrapper,
  Carousel,
  ServicesPanel,
  Panel
} from "./components/index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBarWrapper />
        <Carousel />
        <Panel />
        <ServicesPanel />
      </div>
    );
  }
}

export default App;
