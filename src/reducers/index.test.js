import { initState, roverReducer } from "./index";
import { actionNames } from "../enum";

const {
  ADD_NEW_BOT,
  RESET_ROVERS,
  SET_BOT_VALUE,
  CONTROL_ROVER,
  SET_CURRENT_POSITION,
} = actionNames;
const mockState = {
  bots: [
    {
      id: "bot1",
      name: "peter",
      route: "LMLMLM",
      currentRoute: ["L", "M"],
      startPosition: "1 1 N",
      currentPosition: "2 0 N",
      status: "done",
    },
    {
      id: "bot2",
      name: "steve",
      route: "LMLMLM",
      currentRoute: [],
      startPosition: "2 2 N",
      currentPosition: "2 0 N",
      status: "done",
    },
  ],
  x: "3",
  y: "3",
};

describe("reducers", () => {
  describe("ADD_NEW_BOT", () => {
    it("ADD_NEW_BOT with mockAction", () => {
      const mockAction = {
        type: ADD_NEW_BOT,
        newBot: {
          id: "bot3",
          name: "tony",
          route: "LMLMLM",
          currentRoute: [],
          startPosition: "3 2 N",
          currentPosition: "1 0 N",
          status: "done",
        },
      };
      const { bots } = roverReducer(mockState, mockAction);
      const mockBot = bots.find((b) => b.id === mockAction.newBot.id);

      expect(mockBot.id).toBe("bot3");
      expect(bots.length).toBe(3);
    });
  });
  describe("CONTROL_ROVER", () => {
    it("CONTROL_ROVER with bot2 L", () => {
      const mockAction = { type: CONTROL_ROVER, bot: "bot2", move: "L" };
      const { bots } = roverReducer(mockState, mockAction);
      const mockBot = bots.find((b) => b.id === mockAction.bot);

      expect(mockBot.currentRoute[0]).toBe("L");
    });
  });
  describe("RESET_ROVERS", () => {
    it("RESET_ROVERS with mockState", () => {
      const mockAction = { type: RESET_ROVERS };
      const { bots } = roverReducer(mockState, mockAction);

      expect(bots[0].currentRoute.length).toBe(0);
    });
  });
  describe("SET_CURRENT_POSITION", () => {
    it("SET_CURRENT_POSITION with mockState", () => {
      const mockAction = {
        type: SET_CURRENT_POSITION,
        bot: "bot1",
        position: "2 1 N",
      };
      const { bots } = roverReducer(mockState, mockAction);
      const mockBot = bots.find((b) => b.id === mockAction.bot);

      expect(mockBot.currentPosition).toBe("2 1 N");
    });
  });
  describe("SET_BOT_VALUE", () => {
    it("SET_BOT_VALUE with mockState", () => {
      const mockAction = {
        type: SET_BOT_VALUE,
        bot: "bot1",
        botKey: "name",
        botValue: "Tony",
      };
      const { bots } = roverReducer(mockState, mockAction);
      const mockBot = bots.find((b) => b.id === mockAction.bot);

      expect(mockBot.name).toBe("Tony");
    });
  });
  describe("roverReducer", () => {
    it("should ignore unknown actions", () => {
      const data = { bots: [], type: "mockAction" };
      const { bots } = roverReducer(initState, data);

      expect(bots.length).toBe(0);
    });
  });
});
