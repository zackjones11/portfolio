import * as types from "../mutation-types";

const state = () => ({
  tabs: [
    {
      id: 1,
      isActive: true,
      title: "index.html"
    },
    {
      id: 2,
      isActive: true,
      title: "about-me.html"
    },
    {
      id: 3,
      isActive: false,
      title: "play-snake.html"
    }
  ]
});

const getters = {
  openTabs: state => state.tabs.filter(tab => tab.isActive)
};

const actions = {
  closeTab: ({ commit, state }, tabId) => {
    const newTabs = state.tabs.map(tab => ({
      ...tab,
      ...(tab.id === tabId && { isActive: false })
    }));
    commit(types.SET_TABS, newTabs);
  }
};

const mutations = {
  [types.SET_TABS]: (state, newTabs) => (state.tabs = newTabs)
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
