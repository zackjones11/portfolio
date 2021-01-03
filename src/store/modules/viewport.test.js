import viewport from "./viewport.js";
import * as types from "../mutation-types";

describe("viewport mutations", () => {
  it("types.SET_WINDOW_SIZE should change windowSize state", () => {
    const state = {
      windowSize: { width: 0, height: 0 },
    };
    const newWindowSize = { width: 100, height: 200 };

    viewport.mutations[types.SET_WINDOW_SIZE](state, newWindowSize);

    expect(state.windowSize).toBe(newWindowSize);
  });
});

describe("viewport getters", () => {
  it("windowSize should return window size", () => {
    const state = {
      windowSize: { width: 100, height: 200 },
    };

    expect(viewport.getters.windowSize(state)).toEqual({
      width: 100,
      height: 200,
    });
  });

  it("onlyHeightChange should return TRUE when height only changes", () => {
    const state = {
      windowSize: { width: 100, height: 200 },
    };

    const newSize = {
      innerWidth: 100,
      innerHeight: 300,
    };

    expect(viewport.getters.onlyHeightChange(state)(newSize)).toBeTruthy();
  });

  it("onlyHeightChange should return FALSE when width also changes", () => {
    const state = {
      windowSize: { width: 100, height: 200 },
    };

    const newSize = {
      innerWidth: 200,
      innerHeight: 200,
    };

    expect(viewport.getters.onlyHeightChange(state)(newSize)).toBeFalsy();
  });
});
