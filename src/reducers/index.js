import { combineReducers } from "redux";
import { actionNames } from "../enum";

const { SET_GRID_AXIS } = actionNames;
export const initState = {
  bots: [],
};

export const roverReducer = (state = initState, action) => {
  switch (action.type) {
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
