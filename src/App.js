import React, { Component } from "react";
import "./App.scss";
import { NavBar, Carousel } from "./components/index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Carousel />
      </div>
    );
  }
}

export default App;
