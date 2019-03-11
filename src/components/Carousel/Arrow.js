import React from "react";
import { IconContext } from "react-icons";
import "./Arrow.scss";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Arrow = ({ handler, left }) => {
  return (
    <IconContext.Provider value={{ color: "whitesmoke", className: "arrows" }}>
      <div
        className={`arrow ${left ? "left-button" : "right-button"}`}
        onClick={handler}
      >
        {left ? <FaChevronLeft /> : <FaChevronRight />}
      </div>
    </IconContext.Provider>
  );
};

export default Arrow;
