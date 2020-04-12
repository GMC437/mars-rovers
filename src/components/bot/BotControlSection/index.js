import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setRoute,
  setCurrentPosition,
  controlRover,
  resetRovers,
} from "../../../actions";
import { updateRover } from "../../../helper/rover";

// botPosition, route
const startRoversClick = (actionType, bots, dispatch) => {
  bots.forEach((bot) => {
    const { id, currentPosition } = bot;
    bot.route.split("").forEach((move) => {
      const updatePosition = updateRover(move, currentPosition);
      // setBotValue = (bot, botKey, botValue)
      //   dispatch(setCurrentPosition(id, updatePosition));
      dispatch(controlRover(id, move));
    });
  });
};

const resetRoversClick = (actionType, dispatch) => {
  dispatch(resetRovers(actionType));
};

const BotControlSection = () => {
  const dispatch = useDispatch();

  return (
    <section>
      <button type="button" onClick={startRoversClick}>
        Start
      </button>
      <button type="button" onClick={resetRoversClick}>
        Reset
      </button>
    </section>
  );
};

export default BotControlSection;
