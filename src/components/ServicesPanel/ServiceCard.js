import React from "react";
import "./ServiceCard.scss";
import { IconContext } from "react-icons";
import { FaRecycle } from "react-icons/fa";

const ServiceCard = ({ icon, title, text }) => {
  return (
    <div className="service-card">
      <div className="service-card-icon-wrapper">
        <IconContext.Provider
          value={{
            color: "rgb(46,205,113)",
            size: "3em",
            className: "service-card-icon"
          }}
        >
          <FaRecycle />
        </IconContext.Provider>
      </div>
      <h3 className="service-card-header">Waste Collection</h3>
      <p className="service-card-text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium,
        ullam.
      </p>
    </div>
  );
};

export default ServiceCard;
