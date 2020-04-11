import React, { useState } from "react";
import { useDispatch } from "react-redux";
import StartPositionInput from "../../ui/StartPositionInput";
import RouteInput from "../../ui/RouteInput";
import { setBotValue } from "../../../actions";

const BotInputSection = ({ title, botId, xAxisSize, yAxisSize }) => {
  const dispatch = useDispatch();
  const [botName, setBotName] = useState(title);
  const onStartPositionChange = (botValue) => {
    dispatch(setBotValue(botId, "startPosition", botValue));
  };
  const onRouteChange = (botValue) => {
    dispatch(setBotValue(botId, "route", botValue));
  };

  return (
    <section>
      Bot Input Section
      <div>{title}</div>
      <div>
        <label htmlFor={`${botId}-name-input`}>Name: </label>
        <input
          id={`${botId}-name-input`}
          type="text"
          onChange={(e) => {
            setBotValue(e.target.value)
            dispatch(setBotName(botId, "name",e.target.value))
          }}
          value={botName}
        ></input>
      </div>
      <div>
        <StartPositionInput xAxisSize={xAxisSize} yAxisSize={yAxisSize} onChange={onStartPositionChange} />
      </div>
      <RouteInput onClick={onRouteChange} />
    </section>
  );
};

export default BotInputSection;
