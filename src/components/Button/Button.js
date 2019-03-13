import React from "react";
import styled from "styled-components";

const StyledButton = styled.div`
  outline: none;
  width: 150px;
  height: 40px;
  padding: 10px;
  border-radius: 26px;
  color: ${props => (props.primary ? "white" : "white")};
  background-color: ${props =>
    props.primary ? "rgb(46,205,113)" : "rgba(255,255,255,0.0)"};
  /* filter: drop-shadow(0px 3px 1px black); */
  user-select: none;
  transition: 0.06s ease-in;
  &:hover {
    cursor: pointer;
  }
  &:active {
    transform: translateY(2px);
  }
`;

const Button = props => {
  const { children } = props;
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
