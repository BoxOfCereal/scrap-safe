import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.scss";
import { HomePage, Services } from "./views/index";
import { NavBarWrapper, Footer } from "./components/index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBarWrapper />
        <Route path="/" exact component={HomePage} />
        <Route path="/services" exact component={Services} />
        <Footer />
      </div>
    );
  }
}

export default App;
