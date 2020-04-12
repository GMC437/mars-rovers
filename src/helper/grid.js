export const getGridCells = (xAxis, yAxis) => {
    let cells = [];
    for (let i = xAxis - 1; i >= 0; i--) {
        for (let j = 0; j < yAxis; j++) {
            cells.push(j + "-" + i);
        }
    }
    return cells;
}