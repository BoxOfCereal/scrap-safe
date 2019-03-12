import React, { Component } from "react";
import "./App.scss";
import { NavBarWrapper, Carousel, ServicesPanel } from "./components/index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBarWrapper />
        <Carousel />
        <ServicesPanel />
      </div>
    );
  }
}

export default App;
