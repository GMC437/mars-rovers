import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { actionNames } from "../../../enum";

const { SET_GRID_AXIS } = actionNames;
const LabelStyled = styled.label`
  margin: 5px 10px 5px 0;
`;
const InputStyled = styled.input`
  vertical-align: middle;
  margin: 5px 10px 5px 0;
  text-align: center;
  padding: 2px;
  background-color: #fff;
  border: 1px solid #ddd;
`;

const updateInput = (axisKey, axisValue, setValue, event, dispatch) => {
  setValue(axisValue);
  dispatch(event(SET_GRID_AXIS, axisKey, axisValue));
};

const NumberInput = ({ axis, inputId, labelMessage, initValue, onChange }) => {
  const [currentValue, setCurrentValue] = useState(initValue);
  const dispatch = useDispatch();

  useEffect(() => {
    updateInput(axis, "3", setCurrentValue, onChange, dispatch);
  }, [axis, onChange, dispatch]);

  return (
    <>
      <LabelStyled htmlFor={inputId}>{labelMessage}</LabelStyled>
      <InputStyled
        id={inputId}
        type="number"
        min="1"
        max="9"
        onChange={(e) => {
          updateInput(
            axis,
            e.target.value,
            setCurrentValue,
            onChange,
            dispatch
          );
        }}
        value={currentValue}
      ></InputStyled>
    </>
  );
};

NumberInput.propTypes = {
  axis: PropTypes.string.isRequired,
  inputId: PropTypes.string.isRequired,
  labelMessage: PropTypes.string.isRequired,
  initValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default NumberInput;
