import React from "react";
import styled from "styled-components";
import { FaRecycle } from "react-icons/fa";
import PanelTitle from "./PanelTitle";
import "./Panel.scss";

const DivPanel = styled.div`
  min-width: 100%;
  height: ${props => (props.height ? props.height : "630")}px;
  background-color: rgb(251, 251, 251);
  padding: 50px 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: lightgray;
`;

//refactor into Panel Component and Extend them
const Panel = ({ icon, title, text, children }) => {
  return (
    <DivPanel>
      <PanelTitle Icon={FaRecycle} title="ScrapSafe" subTitle="About Us" />
      {children}
    </DivPanel>
  );
};

export default Panel;
