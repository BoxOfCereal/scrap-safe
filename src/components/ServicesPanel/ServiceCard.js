import React from "react";
import "./ServiceCard.scss";

const ServiceCard = ({ icon, title, text }) => {
  return (
    <div className="service-card">
      <div>{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default ServiceCard;
