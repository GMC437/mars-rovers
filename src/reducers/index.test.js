import { initState, roverReducer } from "./index";

describe("reducers", () => {
  describe("roverReducer", () => {
    it("should ignore unknown actions", () => {
      const data = { bots: [], type: "mockAction" };
      const { bots } = roverReducer(initState, data);

      expect(bots.length).toBe(0);
    });
  });
});
