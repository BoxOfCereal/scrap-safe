import React from "react";
import { Link } from "react-router-dom";
import { MenuIcon } from "../index";
import { useToggleClassName } from "../../CustomHooks";
import "./MobileMenu.scss";

const MobileMenu = () => {
  const [display, toggleDisplay] = useToggleClassName("display");
  console.log(display);
  return (
    <>
      <div onClick={toggleDisplay}>
        <MenuIcon />
      </div>

      <div className={`mobile-menu-container ${display}`}>
        <ul className="mobile-menu-ul">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/stewardship">Environmental Stewardship</Link>
          <Link to="/asset-recovery">Asset Recovery</Link>
          <Link to="/case-study">Case Study</Link>
          <Link to="/contact-us">Contact Us</Link>
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;
