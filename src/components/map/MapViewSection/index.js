import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import MarsGrid from "../../ui/MarsGrid";

const SectionStyled = styled.section`
  display: flex;
`;

const DivStyled = styled.div`
  margin: 0 auto;
`;

const MapViewSection = () => {
  const { x, y, bots } = useSelector((state) => state);
  return (
    <SectionStyled>
      <DivStyled>
        <MarsGrid xAxis={x} yAxis={y} bots={bots} />
      </DivStyled>
    </SectionStyled>
  );
};

export default MapViewSection;
