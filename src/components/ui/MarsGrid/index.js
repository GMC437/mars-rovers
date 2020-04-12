import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { getGridCells } from "../../../helper/grid";
import GridItem from "../GridItem";
import BotGridItem from "../BotGridItem";

const GridContainer = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(${(props) => props.theme.colSize}, auto);
  grid-template-rows: repeat(${(props) =>
    props.theme.rowSize}, var(--gridHeight))
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

const MarsGrid = ({ xAxis, yAxis }) => {
  const gridCells = getGridCells(xAxis, yAxis, true);
  const gridCellsItems = gridCells.map((cell) => {
    const cellSplit = cell.split("-");
    return (
      <GridItem key={cell}>
        <GridItemDetail>{`${cellSplit[0]}, ${cellSplit[1]}`}</GridItemDetail>
      </GridItem>
    );
  });

  const theme = {
    colSize: xAxis,
    rowSize: yAxis,
  };

  return (
    <div>
      Mars Grid
      <ThemeProvider theme={theme}>
        <GridContainer>{gridCellsItems}</GridContainer>
      </ThemeProvider>
    </div>
  );
};

export default MarsGrid;
