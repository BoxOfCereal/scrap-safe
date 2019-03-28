import React, { useState, useEffect } from "react";
import "./NavBar.scss";
import useMediaQuery from "../../CustomHooks/useMediaQuery";
import { MobileMenu } from "../index";

import styled from "styled-components";

const StyledUl = styled.ul`
  ${props => console.log(props)}
  li {
    padding: 20px 10px;
    transition: 0.5s ease;
    text-align: center;
    flex-wrap: wrap;
    &:hover {
      cursor: pointer;
      &:nth-of-type(1):hover ~ .underline {
        margin-left: ${props => `${props.margins[0] + props.offest}px`};
        width: ${props => `${props.widths[0] + props.offest}px`};
        height: 4px;
      }
      &:nth-of-type(2):hover ~ .underline {
        margin-left: ${props => `${props.margins[1] + props.offest}px`};
        width: ${props => `${props.widths[1] + props.offest}px`};
        height: 4px;
      }
      &:nth-of-type(3):hover ~ .underline {
        margin-left: ${props => `${props.margins[2] + props.offest}px`};
        width: ${props => `${props.widths[2] + props.offest}px`};
        height: 4px;
      }
      &:nth-of-type(4):hover ~ .underline {
        margin-left: ${props => `${props.margins[3] + props.offest}px`};
        width: ${props => `${props.widths[3] + props.offest}px`};
        height: 4px;
      }
      &:nth-of-type(5):hover ~ .underline {
        margin-left: ${props => `${props.margins[4] + props.offest}px`};
        width: ${props => `${props.widths[4] + props.offest}px`};
        height: 4px;
      }
      &:nth-of-type(6):hover ~ .underline {
        margin-left: ${props => `${props.margins[5] + props.offest}px`};
        width: ${props => `${props.widths[5] + props.offest}px`};
        height: 4px;
      }
    }
  }
`;

const NavBar = () => {
  const [liWidths, setLiWidths] = useState({
    margins: [0, 63, 139, 350, 475, 572],
    widths: [42, 56, 191, 105, 77, 76]
  });

  const isDesktop = useMediaQuery("(min-width: 880px)");

  return (
    <nav className="nav-bar">
      {isDesktop ? (
        <StyledUl {...liWidths} offest={10}>
          <li>Home</li>
          <li>Services</li>
          <li>Environmental Stewardship</li>
          <li>Asset Recovery</li>
          <li>Case Study</li>
          <li>Contact Us</li>
          <hr className="underline" />
        </StyledUl>
      ) : (
        <>
          <MobileMenu />
        </>
      )}
    </nav>
  );
};

export default NavBar;
