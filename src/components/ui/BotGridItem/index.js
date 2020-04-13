import React from "react";
import styled from "styled-components";

const Bot = styled.span`
  height: 40px;
  width: 30px;
  border: 1px solid black;
  color: white;
  text-align: center;
  background-color: #8e44ad;
  flex-basis: 50%;
  margin: 2px;
`;

const BotContent = styled.div`
  height: 50%;
`;

const BotGridItem = ({ name, orientation }) => {
  return (
    <Bot>
      <BotContent>{orientation}</BotContent>
      <BotContent>{name}</BotContent>
    </Bot>
  );
};

export default BotGridItem;
