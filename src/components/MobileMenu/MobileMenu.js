import React from "react";
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
          <li>Home</li>
          <li>Services</li>
          <li>Environmental Stewardship</li>
          <li>Asset Recovery</li>
          <li>Case Study</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;
