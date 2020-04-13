import React from "react";
import { useDispatch } from "react-redux";
import BotNameInput from "../../ui/BotNameInput";
import StartPositionInput from "../../ui/StartPositionInput";
import RouteInput from "../../ui/RouteInput";
import { setBotValue } from "../../../actions";

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
    <section>
      <div>{title}</div>
      <BotNameInput botId={botId} title={title} onChange={onBotNameChange} />
      <StartPositionInput
        xAxisSize={xAxisSize}
        yAxisSize={yAxisSize}
        onChange={onStartPositionChange}
      />
      <RouteInput onClick={onRouteChange} />
    </section>
  );
};

export default BotInputSection;
