import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import BotNameInput from "../../ui/BotNameInput";
import StartPositionInput from "../../ui/StartPositionInput";
import RouteInput from "../../ui/RouteInput";
import { setBotValue } from "../../../actions";

const SectionContainer = styled.section`
  color: white;
  background-color: #1565c0;
  display: flex;
  flex-flow: column wrap;
  align-items: stretch;
  border: 2px solid black;
  padding: 20px;
  margin: 5px;
  width: fit-content;
`;

const BotInputSection = ({ title, botId, xAxisSize, yAxisSize }) => {
  const dispatch = useDispatch();

  const onBotNameChange = (botValue) => {
    dispatch(setBotValue(botId, "name", botValue));
  };
  const onStartPositionChange = (botValue) => {
    dispatch(setBotValue(botId, "startPosition", botValue));
  };
  const onRouteChange = (botValue) => {
    dispatch(setBotValue(botId, "route", botValue));
  };

  return (
    <SectionContainer>
      <div>{title}</div>
      <BotNameInput botId={botId} title={title} onChange={onBotNameChange} />
      <StartPositionInput
        botId={botId}
        xAxisSize={xAxisSize}
        yAxisSize={yAxisSize}
        onChange={onStartPositionChange}
      />
      <RouteInput onClick={onRouteChange} />
    </SectionContainer>
  );
};

export default BotInputSection;
