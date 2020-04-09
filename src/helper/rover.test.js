import {
  updateRover,
  updateRoverPosition,
  updateRoverOrientation,
  rotateRoverIndex,
  getIndex,
  moveAlongAxisX,
  moveAlongAxisY,
} from "./rover";

const mockData = {
  directions: ["N", "E", "S", "W"],
};

describe("rover core functions", () => {
  describe("updateRover function", () => {
    it(`updateRover with M`, () => {
      const move = "M";
      const position = "1 1 N";
      expect(updateRover(move, position)).toEqual("1 2 N");
    });

    it(`updateRover with R`, () => {
      const move = "R";
      const position = "1 1 N";
      expect(updateRover(move, position)).toEqual("1 1 E");
    });
  });

  describe("updateRoverPosition function", () => {
    it(`updateRoverPosition with N`, () => {
      const move = "M";
      const position = "1 1 N";

      expect(updateRoverPosition(move, position)).toEqual("1 2");
    });
    it(`updateRoverPosition with W`, () => {
      const move = "M";
      const position = "1 1 W";

      expect(updateRoverPosition(move, position)).toEqual("0 1");
    });
  });

  describe("updateRoverOrientation function", () => {
    it(`updateRoverOrientation with N`, () => {
      const { directions } = mockData;
      const move = "R";
      const position = "1 1 N";

      expect(updateRoverOrientation(move, position, directions)).toEqual("E");
    });
  });

  describe("rotateRoverIndex function", () => {
    it(`rotateRoverIndex with N R`, () => {
      const { directions } = mockData;
      const move = "R";
      const position = "1 1 N";

      expect(rotateRoverIndex(move, position, directions)).toEqual(1);
    });

    it(`rotateRoverIndex with N L`, () => {
      const { directions } = mockData;
      const move = "L";
      const position = "1 1 N";

      expect(rotateRoverIndex(move, position, directions)).toEqual(3);
    });
    it(`rotateRoverIndex with W R`, () => {
      const { directions } = mockData;
      const move = "R";
      const position = "1 1 W";

      expect(rotateRoverIndex(move, position, directions)).toEqual(0);
    });
  });

  describe("getIndex function", () => {
    it(`getIndex with N`, () => {
      const orientation = "N";

      expect(getIndex(orientation)).toEqual(0);
    });
  });

  describe("moveAlongAxisX function", () => {
    it(`moveAlongAxisX with E`, () => {
      const orientation = "E";
      const position = "1 1 E";

      expect(moveAlongAxisX(orientation, position)).toEqual("2 1");
    });

    it(`moveAlongAxisX with W`, () => {
      const orientation = "W";
      const position = "1 1 W";

      expect(moveAlongAxisX(orientation, position)).toEqual("0 1");
    });
  });

  describe("moveAlongAxisY function", () => {
    it(`moveAlongAxisX with N`, () => {
      const orientation = "N";
      const position = "1 1 N";

      expect(moveAlongAxisY(orientation, position)).toEqual("1 2");
    });

    it(`moveAlongAxisX with S`, () => {
      const orientation = "S";
      const position = "1 1 S";

      expect(moveAlongAxisY(orientation, position)).toEqual("1 0");
    });
  });
});
