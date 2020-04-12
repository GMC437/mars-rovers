import { combineReducers } from "redux";
import { actionNames } from "../enum";

const {
  ADD_NEW_BOT,
  SET_GRID_AXIS,
  SET_BOT_VALUE,
  SET_CURRENT_POSITION,
  CONTROL_ROVER,
  RESET_ROVERS,
} = actionNames;
export const initState = {
  bots: [],
};

export const roverReducer = (state = initState, action) => {
  let bot;
  switch (action.type) {
    case ADD_NEW_BOT:
      return {
        ...state,
        bots: [...state.bots, action.newBot],
      };
    case RESET_ROVERS:
      const cleanedBots = state.bots.map((b) => {
        b.currentRoute = [];
        return b;
      });

      return {
        ...state,
        bots: [...cleanedBots],
      };
    case CONTROL_ROVER:
      bot = state.bots.find((b) => b.id === action.bot);
      bot.currentRoute.push(action.move);
      return {
        ...state,
        bots: [...state.bots],
      };
    case SET_CURRENT_POSITION:
      bot = state.bots.find((b) => b.id === action.bot);
      bot.currentPosition = action.position;
      return {
        ...state,
        bots: [...state.bots, bot],
      };
    case SET_BOT_VALUE:
      const { botKey, botValue } = action;
      bot = state.bots.find((b) => b.id === action.bot);
      bot[botKey] = botValue;
      return {
        ...state,
        bots: [...state.bots],
      };
    case SET_GRID_AXIS:
      const { axisKey, axisValue } = action;
      return {
        ...state,
        [axisKey]: axisValue,
      };
    default:
      return state;
  }
};

export default combineReducers({
  rovers: roverReducer,
});
