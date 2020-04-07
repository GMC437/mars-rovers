import { setGridAxis } from "./index";
import { actionNames } from "../enum";

const { SET_GRID_AXIS } = actionNames;
const mockData = {
  axisKey: "x",
  axisValue: "3",
};

describe("rover actions", () => {
  it(`setGridAxis should create ${SET_GRID_AXIS} action`, () => {
    const { axisKey, axisValue } = mockData;

    expect(setGridAxis(SET_GRID_AXIS, axisKey, axisValue)).toEqual({
      type: SET_GRID_AXIS,
      axisKey: "x",
      axisValue: "3",
    });
  });
});
