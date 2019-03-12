import React from "react";
import "./NavBarWrapper.scss";
import NavBar from "./NavBar";

const NavBarWrapper = () => {
  return (
    <header className="nav-wrapper">
      <div className="company-name">
        <span>S</span>crap<span>S</span>afe
      </div>
      <NavBar />
    </header>
  );
};

export default NavBarWrapper;
