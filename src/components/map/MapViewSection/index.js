import React from "react";
import { useSelector } from "react-redux";
import MarsGrid from "../../ui/MarsGrid";

const MapViewSection = () => {
  const { x, y, bots } = useSelector((state) => state);
  return (
    <section>
      <MarsGrid xAxis={x} yAxis={y} bots={bots} />
    </section>
  );
};

export default MapViewSection;
