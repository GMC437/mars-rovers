import React, { useState } from "react";
import { useDispatch } from "react-redux";
import StartPositionInput from "../../ui/StartPositionInput";
import { setBotValue } from "../../../actions";
import { actionNames } from "../../../enum";

const { SET_BOT_VALUE } = actionNames;

const updateBotName = (botId, botKey, botValue, dispatch, action, event) => {
  event(botValue);
  dispatch(action(SET_BOT_VALUE, botId, botKey, botValue));
};

const BotInputSection = ({ title, botId }) => {
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
        <StartPositionInput xAxisSize={3} yAxisSize={3} />
      </div>
      <label htmlFor={`${botId}-route-input`}>Route: </label>
      <input
        id={`${botId}-route-input`}
        type="text"
        onChange={(e) => {}}
        value=""
      ></input>
    </section>
  );
};

export default BotInputSection;
