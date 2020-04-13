export const getGridCells = (xAxis, yAxis, isZeroIndex) => {
  let cells = [];

  if (isZeroIndex) {
    for (let i = yAxis - 1; i >= 0; i--) {
      for (let j = 0; j < xAxis; j++) {
        cells.push(`${j}-${i}`);
      }
    }
  } else {
    for (let i = yAxis - 1; i >= 0; i--) {
      for (let j = 0; j < xAxis; j++) {
        cells.push(`${j + 1}-${i + 1}`);
      }
    }
  }
  return cells;
};

export const isValidMove = (move, xAxis, yAxis, isZeroIndex) => {
    const gridCells = getGridCells(xAxis, yAxis, isZeroIndex);
    return gridCells.includes(move);
}

export const getBotOrientation = (orientation) => {
  let compass = new Map();
  compass.set("N", "↑");
  compass.set("E", "→");
  compass.set("S", "↓");
  compass.set("W", "←");

  return compass.get(orientation);
};
