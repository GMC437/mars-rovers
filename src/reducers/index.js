import { combineReducers } from "redux";

export const initState = {
  bots: [],
};

export const roverReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({
  rovers: roverReducer,
});
