import React, { useState } from "react";

const BotInputSection = ({ title }) => {
  const [botName, setBotName] = useState(title);

  return (
    <section>
      Bot Input Section
      <div>{title}</div>
      <label htmlFor="bot-name">Name: </label>
      <input
        id="bot-name"
        type="text"
        onChange={(e) => {}}
        value={botName}
      ></input>
      <label htmlFor="bot-name">Start Position: </label>
      <input
        id="bot-name"
        type="text"
        onChange={(e) => {}}
        value=""
      ></input>
      <label htmlFor="bot-name">Route: </label>
      <input
        id="bot-name"
        type="text"
        onChange={(e) => {}}
        value=""
      ></input>
    </section>
  );
};

export default BotInputSection;
