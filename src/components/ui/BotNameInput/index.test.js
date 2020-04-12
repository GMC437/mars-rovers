import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BotNameInput from "./index";

describe("BotNameInput", () => {
  it("BotNameInput input new name", () => {
    const { getByTestId } = render(
      <BotNameInput botId="bot1" title="bot 1" onChange={() => {}} />
    );
    const input = getByTestId("bot1-name-input");

    fireEvent.change(input, { target: { value: "BOT 1 TEST" } });

    expect(input.value).toBe("BOT 1 TEST");
  });
});
