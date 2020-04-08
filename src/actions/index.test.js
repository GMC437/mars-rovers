import { setGridAxis, setRoute, startRovers, resetRovers } from "./index";
import { actionNames } from "../enum";

const { SET_GRID_AXIS, SET_ROUTE, START_ROVERS, RESET_ROVERS } = actionNames;
const mockData = {
  axisKey: "x",
  axisValue: "3",
  move: "L",
  route: "LMLMLM",
  bot: "bot1",
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

  it(`setRoute should create ${SET_ROUTE} action`, () => {
    const { bot, route } = mockData;

    expect(setRoute(SET_ROUTE, bot, route)).toEqual({
      type: SET_ROUTE,
      bot: "bot1",
      route: "LMLMLM",
    });
  });

  it(`startRovers should create ${START_ROVERS} action`, () => {
    const { bot, move } = mockData;

    expect(startRovers(START_ROVERS, bot, move)).toEqual({
      type: START_ROVERS,
      bot: "bot1",
      move: "L",
    });
  });

  it(`resetRovers should create ${RESET_ROVERS} action`, () => {
    expect(resetRovers(RESET_ROVERS)).toEqual({
      type: RESET_ROVERS,
    });
  });
});
