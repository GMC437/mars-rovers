import { getGridCells, getBotOrientation } from "./grid";

describe("Grid helper functions", () => {
  describe("getGridCells function", () => {
    it(`getGridCells with isZeroIndex true`, () => {
      const xAxis = "5";
      const yAxis = "5";
      const gridCells = getGridCells(xAxis, yAxis, true);
      const gridCellsSize = gridCells.length;
      expect(gridCells[0]).toEqual("0-4");
      expect(gridCells[gridCellsSize - 1]).toEqual("4-0");
      expect(gridCellsSize).toEqual(25);
    });

    it(`getGridCells with isZeroIndex false`, () => {
      const xAxis = "5";
      const yAxis = "5";
      const gridCells = getGridCells(xAxis, yAxis, false);
      const gridCellsSize = gridCells.length;
      expect(gridCells[0]).toEqual("1-5");
      expect(gridCells[gridCellsSize - 1]).toEqual("5-1");
      expect(gridCellsSize).toEqual(25);
    });
  });

  describe("getBotOrientation function", () => {
    it(`getBotOrientation with N`, () => {
      const orientation = "N";

      expect(getBotOrientation(orientation)).toEqual("↑");
    });
    it(`getBotOrientation with E`, () => {
      const orientation = "E";

      expect(getBotOrientation(orientation)).toEqual("→");
    });
    it(`getBotOrientation with S`, () => {
      const orientation = "S";

      expect(getBotOrientation(orientation)).toEqual("↓");
    });
    it(`getBotOrientation with W`, () => {
      const orientation = "W";

      expect(getBotOrientation(orientation)).toEqual("←");
    });
  });
});
