import React from "react";
import "./ServicesPanel.scss";

import { IconContext } from "react-icons";
import { FaRecycle } from "react-icons/fa";
import ServiceCardsWrapper from "./ServiceCardsWrapper";

const ServicesPanel = () => {
  return (
    <section className="services-wrapper">
      <div className="services-title">
        <div>
          <p className="leaf-icon">
            <IconContext.Provider
              value={{ color: "rgb(46,205,113)", size: "2em" }}
            >
              <FaRecycle />
            </IconContext.Provider>
          </p>
          <h2 className="title-header">Our Services</h2>
          <p className="title-text">What We Do</p>
        </div>
      </div>
      <ServiceCardsWrapper />
    </section>
  );
};

export default ServicesPanel;
