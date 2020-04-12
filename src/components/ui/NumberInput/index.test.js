import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NumberInput from "./index";

describe("NumberInput", () => {
  it("NumberInput input new X axis position", () => {
    const { getByTestId } = render(
      <NumberInput axis="x" initValue={3} inputId="x-axis-size-value" labelMessage="x axis:" onChange={() => {}} />
    );
    const input = getByTestId("x-axis-size-value");

    fireEvent.change(input, { target: { value: 4 } });

    expect(input.value).toBe("4");
  });
});
