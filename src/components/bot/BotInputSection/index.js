import React, { useState } from "react";
import { useDispatch } from "react-redux";
import StartPositionInput from "../../ui/StartPositionInput";
import RouteInput from "../../ui/RouteInput";
import { setBotValue } from "../../../actions";

const updateBotName = (botId, botKey, botValue, dispatch, action, event) => {
  event(botValue);
  dispatch(action(botId, botKey, botValue));
};

const BotInputSection = ({ title, botId, xAxisSize, yAxisSize }) => {
  const dispatch = useDispatch();
  const [botName, setBotName] = useState(title);

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
            updateBotName(
              botId,
              "name",
              e.target.value,
              dispatch,
              setBotValue,
              setBotName
            );
          }}
          value={botName}
        ></input>
      </div>
      <div>
        <StartPositionInput xAxisSize={xAxisSize} yAxisSize={yAxisSize} />
      </div>
      <RouteInput />
    </section>
  );
};

export default BotInputSection;
