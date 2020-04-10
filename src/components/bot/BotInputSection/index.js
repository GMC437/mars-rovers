import React, { useState } from "react";
import { useDispatch } from "react-redux";
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
      <label htmlFor={`${botId}-start-position-input`}>Start Position: </label>
      <input
        id={`${botId}-start-position-input`}
        type="text"
        onChange={(e) => {}}
        value=""
      ></input>
      <label htmlFor={`${botId}-route-input`}>Route: </label>
      <input id={`${botId}-route-input`} type="text" onChange={(e) => {}} value=""></input>
    </section>
  );
};

export default BotInputSection;
