import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { getGridCells } from "../../../helper/grid";
import GridItem from "../GridItem";
import { generateGridItem } from "../GridItemGenerator";

const GridContainer = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(${(props) => props.theme.colSize}, auto);
  grid-template-rows: repeat(${(props) =>
    props.theme.rowSize}, var(--gridHeight))
  grid-column-gap: 1px;
  grid-row-gap: 1px;
  padding: 0;
`;

const MarsGrid = ({ xAxis, yAxis, bots }) => {
  const [bot1, bot2] = bots;
  const gridCells = getGridCells(xAxis, yAxis, true);
  const gridCellsItems = gridCells.map((cell) => {
    return <GridItem key={cell}>{generateGridItem(bot1, bot2, cell)}</GridItem>;
  });

  const theme = {
    colSize: xAxis,
    rowSize: yAxis,
  };

  return (
    <ThemeProvider theme={theme}>
      <GridContainer>{gridCellsItems}</GridContainer>
    </ThemeProvider>
  );
};

export default MarsGrid;
