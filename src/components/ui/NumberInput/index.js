import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

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

const NumberInput = ({ axis, inputId, labelMessage, initValue, onChange }) => {
  const [currentValue, setCurrentValue] = useState(initValue);

  return (
    <>
      <LabelStyled htmlFor={inputId}>{labelMessage}</LabelStyled>
      <InputStyled
        id={inputId}
        data-testid={inputId}
        type="number"
        min="1"
        max="9"
        onChange={({ target: { value } }) => {
          value = value.substring(0, 1);
          setCurrentValue(value);
          onChange(axis, value);
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
  initValue: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default NumberInput;
