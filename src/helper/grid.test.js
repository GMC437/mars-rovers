import { getGridCells } from "./grid";

describe("Grid helper functions", () => {
  describe("getGridCells function", () => {
    it(`getGridCells with M`, () => {
      const xAxis = "5"; 
      const yAxis = "5";
      const gridCells = getGridCells(xAxis, yAxis);
      const  gridCellsSize = gridCells.length;
      expect(gridCells[0]).toEqual("0-4");
      expect(gridCells[gridCellsSize-1]).toEqual("4-0");
      expect(gridCellsSize).toEqual(25);
    });
  });
});
