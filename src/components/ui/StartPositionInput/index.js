import React, { useState } from "react";
import PropTypes from "prop-types";

const updateStartPositionValue = (updatedPosition, parentEvent) => {
  console.log(updatedPosition);
  //   parentEvent(updatedPosition);
};

const StartPositionInput = ({ xAxisSize, yAxisSize }) => {
  const [xAxisValue, setXAxisValue] = useState(0);
  const [yAxisValue, setYAxisValue] = useState(0);
  const [directionValue, setDirectionValue] = useState("N");

  return (
    <div>
      <label htmlFor="x-axis-start-position">X Axis start position:</label>
      <input
        id="x-axis-start-position"
        type="number"
        min="0"
        max={xAxisSize - 1}
        onChange={(e) => {
          setXAxisValue(e.target.value);
          updateStartPositionValue(
            `${e.target.value} ${yAxisValue} ${directionValue}`,
            setXAxisValue
          );
        }}
        value={xAxisValue}
      ></input>
      <label htmlFor="y-axis-start-position">Y Axis start position:</label>
      <input
        id="y-axis-start-position"
        type="number"
        min="0"
        max={yAxisSize - 1}
        onChange={(e) => {
          setYAxisValue(e.target.value);
          updateStartPositionValue(`${xAxisValue} ${e.target.value} ${directionValue}`, setYAxisValue);
        }}
        value={yAxisValue}
      ></input>
      <label htmlFor="start-direction">Choose a direction:</label>
      <select
        id="start-direction"
        value={directionValue}
        onChange={(e) => {
          setDirectionValue(e.target.value);
          updateStartPositionValue(`${xAxisValue} ${yAxisValue} ${e.target.value}`, setDirectionValue);
        }}
      >
        <option value="N">North</option>
        <option value="E">East</option>
        <option value="W">West</option>
        <option value="S">South</option>
      </select>
    </div>
  );
};

StartPositionInput.propTypes = {
  xAxisSize: PropTypes.number.isRequired,
  yAxisSize: PropTypes.number.isRequired,
};

export default StartPositionInput;
