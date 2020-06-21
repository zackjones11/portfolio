import * as types from "../mutation-types";

export const TAB_INDEX = Object.freeze({
  IntroInCode: 1,
  AboutMe: 2,
  PlaySnake: 3
});

const state = () => ({
  tabs: [
    {
      id: TAB_INDEX.IntroInCode,
      isSelected: true,
      isOpen: true,
      isCloseable: false,
      title: "index.html"
    },
    {
      id: TAB_INDEX.AboutMe,
      isSelected: false,
      isOpen: true,
      isCloseable: true,
      title: "about-me.html"
    },
    {
      id: TAB_INDEX.PlaySnake,
      isSelected: false,
      isCloseable: true,
      title: "play-snake.html"
    }
  ]
});

const getters = {
  isCloseable: state => tabId =>
    state.tabs.some(tab => tab.id === tabId && tab.isCloseable),
  allTabs: state => state.tabs
};

const actions = {
  openTab: ({ commit, state, getters }, tabId) => {
    if (getters.isCloseable(tabId)) {
      const newTabs = state.tabs.map(tab => ({
        ...tab,
        ...(tab.isCloseable && { isOpen: tab.id === tabId })
      }));

      commit(types.SET_TABS, newTabs);
    }
  },
  selectTab: ({ commit, state }, tabId) => {
    const newTabs = state.tabs.map(tab => ({
      ...tab,
      isSelected: tab.id === tabId
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
