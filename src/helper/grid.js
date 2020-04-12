export const getGridCells = (xAxis, yAxis, isZeroIndex) => {
  let cells = [];
  // const x = !isZeroIndex? +1 : -1;
  if (isZeroIndex) {
    //OG
    for (let i = yAxis - 1; i >= 0; i--) {
      for (let j = 0; j < xAxis; j++) {
        cells.push(`${j}-${i}`);
      }
    }
  } else {
      // index
    for (let i = yAxis-1; i >= 0; i--) {
      for (let j = 0; j < xAxis; j++) {
        cells.push(`${j+1}-${i+1}`);
      }
    }
  }
  return cells;
};
