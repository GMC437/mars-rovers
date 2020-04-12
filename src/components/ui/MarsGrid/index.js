import React from "react";
import styled from "styled-components";
import GridItem from "../GridItem";
import BotGridItem from "../BotGridItem";

const GridContainer = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1px;
  grid-row-gap: 1px;
`;

const GridItemDetail = styled.span`
  padding-left: 2px;
`;

const BotsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 5px;
`;

const MarsGrid = () => {
  return (
    <div>
      Mars Grid
      <GridContainer>
        <GridItem key="2-0">
          <GridItemDetail>2, 0</GridItemDetail>
        </GridItem>
        <GridItem key="2-1">
          <GridItemDetail>2, 1</GridItemDetail>
        </GridItem>
        <GridItem key="2-2">
          <GridItemDetail>2, 2</GridItemDetail>
        </GridItem>
        <GridItem key="1-0">
          <GridItemDetail>1, 0</GridItemDetail>
        </GridItem>
        <GridItem key="1-1">
          <GridItemDetail>1, 1</GridItemDetail>
        </GridItem>
        <GridItem key="1-2">
          <GridItemDetail>1, 2</GridItemDetail>
        </GridItem>
        <GridItem key="0-0">
          <GridItemDetail>0, 0</GridItemDetail>
          <BotsContainer>
            <BotGridItem name="B1" orientation="↑" />
            <BotGridItem name="B2" orientation="↑" />
          </BotsContainer>
        </GridItem>
        <GridItem key="0-1">
          <GridItemDetail>0, 1</GridItemDetail>
        </GridItem>
        <GridItem key="0-2">
          <GridItemDetail>0, 2</GridItemDetail>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default MarsGrid;
