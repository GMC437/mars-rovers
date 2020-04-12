import React from "react";
import { render, fireEvent } from "@testing-library/react";
import RouteInput from "./index";

describe("RouteInput", () => {
  it("RouteInput click M button", () => {
    const { getByText, getByTestId } = render(
      <RouteInput onClick={() => {}} />
    );
    const routeDiv = getByTestId("route");

    fireEvent.click(getByText("M"));

    expect(routeDiv.innerHTML).toBe("M");
  });

  it("RouteInput click L button", () => {
    const { getByText, getByTestId } = render(
      <RouteInput onClick={() => {}} />
    );
    const routeDiv = getByTestId("route");
    
    fireEvent.click(getByText("L"));
    
    expect(routeDiv.innerHTML).toBe("L");
  });

  it("RouteInput click R button", () => {
    const { getByText, getByTestId } = render(
      <RouteInput onClick={() => {}} />
    );
    const routeDiv = getByTestId("route");
    
    fireEvent.click(getByText("R"));
    
    expect(routeDiv.innerHTML).toBe("R");
  });

  it("RouteInput click ← button", () => {
    const { getByText, getByTestId } = render(
      <RouteInput onClick={() => {}} />
    );
    const routeDiv = getByTestId("route");

    fireEvent.click(getByText("R"));
    fireEvent.click(getByText("L"));
    fireEvent.click(getByText("M"));
    fireEvent.click(getByText("←"));

    expect(routeDiv.innerHTML).toBe("RL");
  });

  it("RouteInput click X button", () => {
    const { getByText, getByTestId } = render(
      <RouteInput onClick={() => {}} />
    );
    const routeDiv = getByTestId("route");
    
    fireEvent.click(getByText("R"));
    fireEvent.click(getByText("X"));

    expect(routeDiv.innerHTML).toBe("route is empty");
  });

  it("default", () => {
    const { getByText } = render(<RouteInput />);
    const page = getByText("route is empty");

    expect(page).toBeInTheDocument();
  });
});
