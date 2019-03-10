import React from "react";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <header className="nav-wrapper">
      <div className="company-name">
        <span>S</span>crap<span>S</span>afe
      </div>
      <nav className="nav-bar">
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Environmental Stewardship</li>
          <li>Asset Recovery</li>
          <li>Case Study</li>
          <li>Contact Us</li>
          <div className="underbar asset" />
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
