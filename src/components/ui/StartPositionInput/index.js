import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const DivStyled = styled.div`
  margin: 5px 0;
`;
const InputStyled = styled.input`
  vertical-align: middle;
  margin: 2px 5px;
  text-align: center;
  padding: 2px;
  background-color: #fff;
  border: 1px solid #ddd;
`;
const SelectStyled = styled.select`
  margin: 2px 5px;
`;

const StartPositionInput = ({ botId, xAxisSize, yAxisSize, onChange }) => {
  const [xAxisValue, setXAxisValue] = useState(0);
  const [yAxisValue, setYAxisValue] = useState(0);
  const [directionValue, setDirectionValue] = useState("N");

  return (
    <DivStyled>
      <div>
        <label htmlFor={`${botId}-x-axis-start-position`}>
          X Axis start position:
        </label>
        <InputStyled
          id={`${botId}-x-axis-start-position`}
          data-testid="x-axis-start-position"
          type="number"
          min="0"
          max={xAxisSize - 1}
          onChange={({ target: { value } }) => {
            value = value.substring(0, 1);
            setXAxisValue(value);
            onChange(`${value} ${yAxisValue} ${directionValue}`);
          }}
          value={xAxisValue}
        ></InputStyled>
      </div>
      <div>
        <label htmlFor={`${botId}-y-axis-start-position`}>
          Y Axis start position:
        </label>
        <InputStyled
          id={`${botId}-y-axis-start-position`}
          data-testid="y-axis-start-position"
          type="number"
          min="0"
          max={yAxisSize - 1}
          onChange={({ target: { value } }) => {
            value = value.substring(0, 1);
            setYAxisValue(value);
            onChange(`${xAxisValue} ${value} ${directionValue}`);
          }}
          value={yAxisValue}
        ></InputStyled>
      </div>
      <div>
        <label htmlFor={`${botId}-start-direction`}>Choose a direction:</label>
        <SelectStyled
          id={`${botId}-start-direction`}
          data-testid="start-direction"
          value={directionValue}
          onChange={({ target: { value } }) => {
            setDirectionValue(value);
            onChange(`${xAxisValue} ${yAxisValue} ${value}`);
          }}
        >
          <option value="N">North</option>
          <option value="E">East</option>
          <option value="W">West</option>
          <option value="S">South</option>
        </SelectStyled>
      </div>
    </DivStyled>
  );
};

StartPositionInput.propTypes = {
  botId: PropTypes.string.isRequired,
  xAxisSize: PropTypes.string.isRequired,
  yAxisSize: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default StartPositionInput;
