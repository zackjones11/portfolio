import tabs from "./tabs.js";
import * as types from "../mutation-types";

describe("tabs mutations", () => {
  it("types.SET_TABS should change tabs state", () => {
    const state = {
      tabs: [],
    };
    const newTabs = [
      { id: 1, isActive: true },
      { id: 2, isActive: false },
    ];

    tabs.mutations[types.SET_TABS](state, newTabs);

    expect(state.tabs).toBe(newTabs);
  });
});

describe("tabs getters", () => {
  it("allTabs should return all tabs state", () => {
    const state = {
      tabs: [{ id: 1 }, { id: 2 }, { id: 3 }],
    };

    expect(tabs.getters.allTabs(state)).toHaveLength(3);
  });

  it("isClosable should return true if isCloseable", () => {
    const state = {
      tabs: [{ id: 1 }, { id: 2, isCloseable: true }, { id: 3 }],
    };
    const tabId = 2;

    expect(tabs.getters.isCloseable(state)(tabId)).toBeTruthy();
  });

  it("isClosable should return false if NOT isCloseable", () => {
    const state = {
      tabs: [{ id: 1, isCloseable: false }, { id: 2 }, { id: 3 }],
    };
    const tabId = 1;

    expect(tabs.getters.isCloseable(state)(tabId)).toBeFalsy();
  });
});
