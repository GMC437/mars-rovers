import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setGridAxis } from "../../../actions";
import NumberInput from "../../ui/NumberInput";

const InputContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: stretch;
`;

const MapSetupSection = () => {
  const dispatch = useDispatch();
  const onChange = (axisKey, axisValue) => {
    dispatch(setGridAxis(axisKey, axisValue));
  };
  return (
    <section>
      <InputContainer>
        <NumberInput
          axis="x"
          inputId="x-axis-size-value"
          labelMessage="Enter length of X axis:"
          initValue={3}
          onChange={onChange}
        />
        <NumberInput
          axis="y"
          inputId="y-axis-size-value"
          labelMessage="Enter length of Y axis:"
          initValue={3}
          onChange={onChange}
        />
      </InputContainer>
    </section>
  );
};

export default MapSetupSection;
