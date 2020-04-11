import { actionNames } from "../enum";
const {
  ADD_NEW_BOT,
  SET_GRID_AXIS,
  SET_BOT_VALUE,
  SET_ROUTE,
  CONTROL_ROVER,
  RESET_ROVERS,
} = actionNames;

export const setGridAxis = (axisKey, axisValue) => {
  return {
    type: SET_GRID_AXIS,
    axisKey,
    axisValue,
  };
};

export const addNewBot = (newBot) => {
  return {
    type: ADD_NEW_BOT,
    newBot,
  };
};
export const setBotValue = (bot, botKey, botValue) => {
  return {
    type: SET_BOT_VALUE,
    bot,
    botKey,
    botValue,
  };
};

export const setRoute = (bot, route) => {
  return {
    type: SET_ROUTE,
    bot,
    route,
  };
};

export const controlRover = (bot, move) => {
  return {
    type: CONTROL_ROVER,
    bot,
    move,
  };
};

export const resetRovers = () => {
  return {
    type: RESET_ROVERS,
  };
};
