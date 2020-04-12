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
  align-items: center;
  justify-content: space-evenly;
  padding-top: 5px;
`;

const setBotGridPosition = (bot1, bot2, cell) => {
  const cellSplit = cell.split("-");
  const bot1PositionSplit = bot1.currentPosition.split(" ");
  const bot2PositionSplit = bot2.currentPosition.split(" ");
  const bot1Coords = `${bot1PositionSplit[0]}-${bot1PositionSplit[1]}`;
  const bot2Coords = `${bot2PositionSplit[0]}-${bot2PositionSplit[1]}`;
  const bot1Name = `${bot1.name.substring(0, 1)}1`;
  const bot2Name = `${bot2.name.substring(0, 1)}2`;
  if (bot1Coords === cell && bot2Coords === cell) {
    return (
      <>
        <GridItemDetail>{`${cellSplit[0]}, ${cellSplit[1]}`}</GridItemDetail>
        <BotsContainer>
          <BotGridItem name={bot1Name} orientation="↑" />
          <BotGridItem name={bot2Name} orientation="↑" />
        </BotsContainer>
      </>
    );
  } else if (bot1Coords === cell) {
    return (
      <>
        <GridItemDetail>{`${cellSplit[0]}, ${cellSplit[1]}`}</GridItemDetail>
        <BotsContainer>
          <BotGridItem name={bot1Name} orientation="↑" />
        </BotsContainer>
      </>
    );
  } else if (bot2Coords === cell) {
    return (
      <>
        <GridItemDetail>{`${cellSplit[0]}, ${cellSplit[1]}`}</GridItemDetail>
        <BotsContainer>
          <BotGridItem name={bot2Name} orientation="↑" />
        </BotsContainer>
      </>
    );
  } else {
    return (
      <GridItemDetail>{`${cellSplit[0]}, ${cellSplit[1]}`}</GridItemDetail>
    );
  }
};

const MarsGrid = ({ xAxis, yAxis, bots }) => {
  const [bot1, bot2] = bots;
  const gridCells = getGridCells(xAxis, yAxis, true);
  const gridCellsItems = gridCells.map((cell) => {
    return (
      <GridItem key={cell}>{setBotGridPosition(bot1, bot2, cell)}</GridItem>
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
