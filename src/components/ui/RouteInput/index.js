import React, { useState } from "react";

const RouteInput = ({ onClick }) => {
  const [route, setRoute] = useState([]);

  return (
    <div>
      <div data-testid="route" >{route.length === 0 ? "route is empty" : route.join("")}</div>
      <button
        type="button"
        value="M"
        onClick={({ target: { value } }) => {
          setRoute([...route, value]);
          onClick(route.join(""));
        }}
      >
        M
      </button>
      <button
        type="button"
        value="L"
        onClick={({ target: { value } }) => {
          setRoute([...route, value]);
          onClick(route.join(""));
        }}
      >
        L
      </button>
      <button
        type="button"
        value="R"
        onClick={({ target: { value } }) => {
          setRoute([...route, value]);
          onClick(route.join(""));
        }}
      >
        R
      </button>
      <button
        type="button"
        onClick={() => {
          setRoute([...route.slice(0, route.length - 1)]);
          onClick(route.join(""));
        }}
      >
        ←
      </button>
      <button
        type="button"
        onClick={() => {
          setRoute([]);
          onClick(route.join(""));
        }}
      >
        X
      </button>
    </div>
  );
};

export default RouteInput;
