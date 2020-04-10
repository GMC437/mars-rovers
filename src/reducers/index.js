import { combineReducers } from "redux";
import { actionNames } from "../enum";

const {
  SET_GRID_AXIS,
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
