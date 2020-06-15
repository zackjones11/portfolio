import tabs from "./tabs.js";
import * as types from "../mutation-types";

describe("tabs mutations", () => {
  it("types.SET_TABS should change tabs state", () => {
    const state = {
      tabs: []
    };
    const newTabs = [
      { id: 1, isActive: true },
      { id: 2, isActive: false }
    ];

    tabs.mutations[types.SET_TABS](state, newTabs);

    expect(state.tabs).toBe(newTabs);
  });
});

describe("tabs getters", () => {
  it("openTabs should return only tab state with isActive", () => {
    const state = {
      tabs: [
        { id: 1, isActive: true },
        { id: 2, isActive: true },
        { id: 3, isActive: false }
      ]
    };

    expect(tabs.getters.openTabs(state)).toHaveLength(2);
  });
});
