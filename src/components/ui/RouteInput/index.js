import React, { useState } from "react";

const buttonsSetup = [
  { value: "M" },
  { value: "L" },
  { value: "R" },
  { value: "←" },
  { value: "X" },
];
const buttons = buttonsSetup.map((b, index) => (
  <button key={index} type="button">{b.value}</button>
));

const RouteInput = () => {
//   const []
    return (
    <div>
      Route Input
      <div>LMLMLM</div>
      {buttons} 
    </div>
  );
};

export default RouteInput;
