import React from "react";
import { useDispatch } from "react-redux";
import { setBotValue, controlRover, resetRovers } from "../../../actions";
import { updateRover } from "../../../helper/rover";

// botPosition, route
const startRoversClick = (bots, dispatch) => {
  resetRoversClick(bots, dispatch);
  bots.forEach((bot) => {
    const { id, currentPosition } = bot;
    bot.route.split("").forEach((move) => {
      const updatePosition = updateRover(move, currentPosition);
      // setBotValue = (bot, botKey, botValue)
      dispatch(setBotValue(bot.id, "currentPosition", updatePosition));
      dispatch(controlRover(id, move));
    });
  });
};

const resetRoversClick = (bots, dispatch) => {
  bots.forEach((bot) => {
    dispatch(setBotValue(bot.id, "currentPosition", bot.startPosition));
  });
  dispatch(resetRovers());
};

const BotControlSection = ({ bots }) => {
  const dispatch = useDispatch();

  return (
    <section>
      <button
        type="button"
        onClick={() => {
          startRoversClick(bots, dispatch);
        }}
      >
        Start
      </button>
      <button type="button" onClick={() => resetRoversClick(bots, dispatch)}>
        Reset
      </button>
    </section>
  );
};

export default BotControlSection;
