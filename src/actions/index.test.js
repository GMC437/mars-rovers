import {
  setGridAxis,
  setBotValue,
  setRoute,
  controlRover,
  resetRovers,
} from "./index";
import { actionNames } from "../enum";

const {
  SET_GRID_AXIS,
  SET_BOT_VALUE,
  SET_ROUTE,
  CONTROL_ROVER,
  RESET_ROVERS,
} = actionNames;
const mockData = {
  axisKey: "x",
  axisValue: "3",
  move: "L",
  route: "LMLMLM",
  bot: "bot1",
  botKey: "name",
  name: "Peter",
};

describe("rover actions", () => {
  it(`setGridAxis should create ${SET_GRID_AXIS} action`, () => {
    const { axisKey, axisValue } = mockData;

    expect(setGridAxis(axisKey, axisValue)).toEqual({
      type: SET_GRID_AXIS,
      axisKey: "x",
      axisValue: "3",
    });
  });

  it(`setBotValue should create ${SET_BOT_VALUE} action`, () => {
    const { bot, botKey, name } = mockData;

    expect(setBotValue(bot, botKey, name)).toEqual({
      type: SET_BOT_VALUE,
      bot: "bot1",
      botKey: "name",
      botValue: "Peter",
    });
  });

  it(`setRoute should create ${SET_ROUTE} action`, () => {
    const { bot, route } = mockData;

    expect(setRoute(bot, route)).toEqual({
      type: SET_ROUTE,
      bot: "bot1",
      route: "LMLMLM",
    });
  });

  it(`controlRover should create ${CONTROL_ROVER} action`, () => {
    const { bot, move } = mockData;

    expect(controlRover(bot, move)).toEqual({
      type: CONTROL_ROVER,
      bot: "bot1",
      move: "L",
    });
  });

  it(`resetRovers should create ${RESET_ROVERS} action`, () => {
    expect(resetRovers()).toEqual({
      type: RESET_ROVERS,
    });
  });
});
