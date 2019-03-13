import React from "react";
import { IconContext } from "react-icons";
import "./PanelTitle.scss";

const PanelTitle = ({ Icon, title, subTitle }) => {
  return (
    <div className="panel-title-wrapper">
      <div className="panel-icon-wrapper">
        <IconContext.Provider
          value={{
            color: "rgb(46,205,113)",
            size: "2em",
            className: "panel-icon"
          }}
        >
          <Icon />
        </IconContext.Provider>
      </div>
      <h2 className="panel-header">{title}</h2>
      <p className="panel-sub-header">{subTitle}</p>
    </div>
  );
};

export default PanelTitle;
