import React from "react";
import styled from "styled-components";
import { FaRecycle } from "react-icons/fa";
import PanelTitle from "./PanelTitle";
import "./Panel.scss";

const SectionPanel = styled.section`
  min-width: 100%;
  height: ${props => (props.height ? props.height : "630")}px;
  background-color: rgb(251, 251, 251);
  padding: 50px 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: lightgray;

  p {
    line-height: 1.8rem;
    width: 75%;
    margin: 0 auto;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    & > * {
      margin-bottom: 20px;
    }
  }
`;

//refactor into Panel Component and Extend them
const Panel = ({ icon, title, subTitle, children, height }) => {
  return (
    <SectionPanel height={height}>
      <PanelTitle Icon={FaRecycle} title={"ScrapSafe"} subTitle="About Us" />
      <div>{children}</div>
    </SectionPanel>
  );
};

export default Panel;
