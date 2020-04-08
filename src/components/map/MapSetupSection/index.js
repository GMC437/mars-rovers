import React from "react";
import styled from "styled-components";
import { setGridAxis } from "../../../actions";
import NumberInput from "../../ui/NumberInput";

const InputContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: stretch;
`;

const MapSetupSection = () => {
  return (
    <section>
      <InputContainer>
        <NumberInput
          axis="x"
          inputId="x-axis-size-value"
          labelMessage="Enter length of X axis:"
          initValue="3"
          onChange={setGridAxis}
        />
        <NumberInput
          axis="y"
          inputId="y-axis-size-value"
          labelMessage="Enter length of Y axis:"
          initValue="3"
          onChange={setGridAxis}
        />
      </InputContainer>
    </section>
  );
};

export default MapSetupSection;
