import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

const SectionContainer = styled.section`
  display: flex;
  flex-flow: column wrap;
  align-items: stretch;
  border-style: solid;
  padding: 4px;
  margin: 1px;
`;

const BotOutputSection = ({ title, name, position, route, status }) => {
  return (
    <SectionContainer>
      <div>{title}</div>
      <div>Name: {name}</div>
      <div>Current position: {position}</div>
      <div>Current route: {route}</div>
      <div>Current status: {status}</div>
    </SectionContainer>
  );
};

BotOutputSection.propTypes = {
  title: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  position: propTypes.string.isRequired,
  route: propTypes.string.isRequired,
  status: propTypes.string.isRequired,
};

export default BotOutputSection;
