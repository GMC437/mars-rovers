import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startRovers, resetRovers } from "../../../actions";

const BotControlSection = () => {
  const dispatch = useDispatch();

  return (
    <section>
      <button type="button">Start</button>
      <button type="button">Reset</button>
    </section>
  );
};

export default BotControlSection;
