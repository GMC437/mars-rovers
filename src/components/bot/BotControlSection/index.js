import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setBotValue, controlRover, resetRovers } from "../../../actions";
import { isValidMove } from "../../../helper/grid";
import { updateRover } from "../../../helper/rover";

const ButtonStyled = styled.button`
    background-color: black;
    color: white;
`

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
      <ButtonStyled
        type="button"
        onClick={() => {
          startRoversClick(bots, xAxis, yAxis, dispatch);
        }}
      >
        Start Rovers
      </ButtonStyled>
      <button type="button" onClick={() => resetRoversClick(bots, dispatch)}>
        Reset Rovers
      </button>
    </section>
  );
};

export default BotControlSection;
