import React from "react";
import "./ServicesPanel.scss";

const ServicesPanel = () => {
  return (
    <section className="services-wrapper">
      <div className="title">
        <div>
          <p>iconr</p>
          <h2>Our Services</h2>
          <p>What We Do</p>
        </div>
      </div>
      <div className="service-cards-wrapper">
        <div className="service-card" />
        <div className="service-card" />
        <div className="service-card" />
        <div className="service-card" />
      </div>
    </section>
  );
};

export default ServicesPanel;
