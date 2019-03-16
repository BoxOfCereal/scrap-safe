import React, { Component } from "react";
import "./App.scss";
import {
  NavBarWrapper,
  Carousel,
  ServicesPanel,
  Panel,
  ImagePanel,
  Button
} from "./components/index";
import { FaRecycle } from "react-icons/fa";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBarWrapper />
        <Carousel />
        <Panel height={400} title="ScrapSafe" subTitle="About Us">
          <p>
            ScrapSafe, Inc., was founded in 2010 by retired GE meter division
            executives and offers a unique process to dispose safely and
            economically of retired electromechanical watt hour, water and gas
            meters.
          </p>
          <Button primary>Read More</Button>
        </Panel>
        <ServicesPanel />
        <ImagePanel
          Icon={FaRecycle}
          title="New Recycle Idea"
          flavorText={
            "We Always Strive To Produce New Ideas To Help Us In Our Cycling Process"
          }
        />
      </div>
    );
  }
}

export default App;
