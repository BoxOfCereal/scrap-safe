import React, { useState, useEffect } from "react";
import "./NavBar.scss";

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
  const navRef = React.createRef();

  useEffect(() => {
    console.log(navRef);
  });

  // function scaleTable() {
  //   let table = document.getElementById("test");
  //   let windowWidth = window.innerWidth;
  //   const breakPoint = 500;
  //   if (breakPoint > windowWidth) {
  //     let tableWidth = window
  //       .getComputedStyle(table)
  //       .getPropertyValue("width")
  //       .replace("px", "");
  //     const ratio = (windowWidth / tableWidth) * 0.95;
  //     console.log(windowWidth, tableWidth, `scale(${ratio},${ratio})`);
  //     table.style.transform = `scale(${ratio},${ratio})`;
  //   } else {
  //     table.style.transform = ``;
  //   }
  // }

  // window.addEventListener("resize", () => {
  //   scaleTable();
  // });
  // scaleTable();

  return (
    <nav ref={navRef} className="nav-bar">
      <StyledUl {...liWidths} offest={10}>
        <li>Home</li>
        <li>Services</li>
        <li>Environmental Stewardship</li>
        <li>Asset Recovery</li>
        <li>Case Study</li>
        <li>Contact Us</li>
        <hr className="underline" />
      </StyledUl>
    </nav>
  );
};

export default NavBar;
