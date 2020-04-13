import React from "react";
import { render, fireEvent } from "@testing-library/react";
import StartPositionInput from "./index";

describe("StartPositionInput", () => {
  it("StartPositionInput input new X axis position", () => {
    const { getByTestId } = render(
      <StartPositionInput botId="bot1" xAxisSize="3" yAxisSize="3" onChange={() => {}} />
    );
    const input = getByTestId("x-axis-start-position");

    fireEvent.change(input, { target: { value: 4 } });

    expect(input.value).toBe("4");
  });

  it("StartPositionInput input new Y axis position", () => {
    const { getByTestId } = render(
      <StartPositionInput botId="bot1" xAxisSize="3" yAxisSize="3" onChange={() => {}} />
    );
    const input = getByTestId("y-axis-start-position");

    fireEvent.change(input, { target: { value: 4 } });

    expect(input.value).toBe("4");
  });

  it("StartPositionInput input new direction", () => {
    const { getByTestId } = render(
      <StartPositionInput botId="bot1" xAxisSize="3" yAxisSize="3" onChange={() => {}} />
    );
    const input = getByTestId("start-direction");

    fireEvent.change(input, { target: { value: "W" } });

    expect(input.value).toBe("W");
  });
});
