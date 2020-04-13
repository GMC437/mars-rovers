import React from "react";
import { useDispatch } from "react-redux";
import { setBotValue, controlRover, resetRovers } from "../../../actions";
import { isValidMove } from "../../../helper/grid";
import { updateRover } from "../../../helper/rover";

const startRoversClick = (bots, xAxis, yAxis, dispatch) => {
  resetRoversClick(bots, dispatch);
  bots.forEach((bot) => {
    const { id, currentPosition, status } = bot;
    let botCurrentPosition = currentPosition;
    let botCurrentStatus = status;
    if (bot.route.length === 0) {
      return;
    }
    
    bot.route.split("").forEach((move) => {
      const updatePosition = updateRover(move, botCurrentPosition);
      botCurrentPosition = updatePosition;
      if (
        !isValidMove(updatePosition, xAxis, yAxis, true) ||
        botCurrentStatus === "error"
      ) {
        botCurrentStatus = "error";
        dispatch(setBotValue(bot.id, "status", "error"));
        return;
      }
      dispatch(setBotValue(bot.id, "currentPosition", updatePosition));
      dispatch(controlRover(id, move));
    });
    dispatch(
      setBotValue(
        bot.id,
        "status",
        botCurrentStatus === "error" ? "error" : "completed"
      )
    );
  });
};

const resetRoversClick = (bots, dispatch) => {
  bots.forEach((bot) => {
    dispatch(setBotValue(bot.id, "currentPosition", bot.startPosition));
    dispatch(setBotValue(bot.id, "status", "waiting"));
  });
  dispatch(resetRovers());
};

const BotControlSection = ({ bots, xAxis, yAxis }) => {
  const dispatch = useDispatch();

  return (
    <section>
      <button
        type="button"
        onClick={() => {
          startRoversClick(bots, xAxis, yAxis, dispatch);
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
