import React from "react";
import { Button } from "../index";
import { IconContext } from "react-icons";
import "./ImagePanel.scss";

//refactor into Panel Component and Extend them
const ImagePanel = ({ Icon, title, flavorText, children, height }) => {
  return (
    <div className="image-panel">
      <div className="image-panel-overlay">
        <div className="image-panel-icon">
          <IconContext.Provider
            value={{
              color: "white",
              size: "2em",
              className: "panel-icon"
            }}
          >
            <Icon />
          </IconContext.Provider>
        </div>
        <div className="image-panel-text-wrapper">
          <h2 className="image-panel-title">{title}</h2>
          <p className="flavor-text">{flavorText}</p>
        </div>
        <Button primary>Learn More</Button>
      </div>
    </div>
  );
};

export default ImagePanel;
