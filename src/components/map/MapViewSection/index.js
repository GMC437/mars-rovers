import React from "react";
import { useSelector } from "react-redux";
import MarsGrid from "../../ui/MarsGrid";

const MapViewSection = () => {
  const { x, y } = useSelector((state) => state);
  return (
    <section>
      <MarsGrid xAxis={x} yAxis={y} />
    </section>
  );
};

export default MapViewSection;
