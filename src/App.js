import React, { Component } from "react";
import "./App.scss";
import { NavBar, Carousel, ServicesPanel } from "./components/index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Carousel />
        <ServicesPanel />
      </div>
    );
  }
}

export default App;
