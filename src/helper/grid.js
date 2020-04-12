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

export const getBotOrientation = (orientation) => {
  let compass = new Map();
  compass.set("N", "↑");
  compass.set("E", "→");
  compass.set("S", "↓");
  compass.set("W", "←");

  return compass.get(orientation);
};
