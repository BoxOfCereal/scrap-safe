import React from "react";
import "./ServicesPanel.scss";

import { FaRecycle } from "react-icons/fa";
import ServiceCardsWrapper from "./ServiceCardsWrapper";

const ServicesPanel = () => {
  return (
    <section className="services-wrapper">
      <div className="services-title">
        <div>
          <p className="leaf-icon">
            <FaRecycle />
          </p>
          <h2>Our Services</h2>
          <p>What We Do</p>
        </div>
      </div>
      <ServiceCardsWrapper />
    </section>
  );
};

export default ServicesPanel;
