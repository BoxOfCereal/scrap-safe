import React, { Component } from "react";
import "./App.scss";
import {
  NavBarWrapper,
  Carousel,
  ServicesPanel,
  Panel,
  Button
} from "./components/index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBarWrapper />
        <Carousel />
        <Panel height={400}>
          <p>
            ScrapSafe, Inc., was founded in 2010 by retired GE meter division
            executives and offers a unique process to dispose safely and
            economically of retired electromechanical watt hour, water and gas
            meters.
          </p>
          <Button primary>Read More</Button>
        </Panel>
        <ServicesPanel />
      </div>
    );
  }
}

export default App;
