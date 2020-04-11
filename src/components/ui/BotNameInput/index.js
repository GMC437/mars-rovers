import React, { useState } from "react";
import PropTypes from "prop-types";

const BotNameInput = ({ botId, title, onChange }) => {
  const [botName, setBotName] = useState(title);

  return (
    <div>
      <label htmlFor={`${botId}-name-input`}>Name: </label>
      <input
        id={`${botId}-name-input`}
        data-testid={`${botId}-name-input`}
        type="text"
        onChange={({ target: { value } }) => {
          setBotName(value);
          onChange(value);
        }}
        value={botName}
      ></input>
    </div>
  );
};

BotNameInput.propTypes = {
  botId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default BotNameInput;
