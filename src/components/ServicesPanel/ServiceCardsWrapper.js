import React from "react";
import "./ServiceCardsWrapper.scss";
import ServiceCard from "./ServiceCard";

const ServiceCardsWrapper = () => {
  return (
    <div className="service-cards-wrapper">
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
    </div>
  );
};

export default ServiceCardsWrapper;
