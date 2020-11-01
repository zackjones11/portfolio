import * as types from "../mutation-types";

export const TAB_IDS = Object.freeze({
  IntroInCode: 1,
  AboutMe: 2,
  PlaySnake: 3,
});

export const TAB_PATHS = Object.freeze({
  IntroInCode: "/",
  AboutMe: "/about-me",
  PlaySnake: "/snake",
});

const state = () => ({
  tabs: [
    {
      id: TAB_IDS.IntroInCode,
      path: TAB_PATHS.IntroInCode,
      isSelected: true,
      isOpen: true,
      isCloseable: false,
      title: "index.html",
    },
    {
      id: TAB_IDS.AboutMe,
      path: TAB_PATHS.AboutMe,
      isSelected: false,
      isOpen: true,
      isCloseable: true,
      title: "about-me.html",
    },
    {
      id: TAB_IDS.PlaySnake,
      path: TAB_PATHS.PlaySnake,
      isSelected: false,
      isOpen: false,
      isCloseable: true,
      title: "play-snake.html",
    },
  ],
});

const getters = {
  isCloseable: (state) => (tabId) =>
    state.tabs.some((tab) => tab.id === tabId && tab.isCloseable),
  allTabs: (state) => state.tabs,
  openTabIds: (state) =>
    state.tabs.filter(({ isOpen }) => isOpen).map(({ id }) => id),
};

const actions = {
  openTab: (context, tabId) => {
    const { commit, state, getters } = context;

    if (!getters.isCloseable(tabId)) {
      return;
    }

    const newTabs = state.tabs.map((tab) => ({
      ...tab,
      isOpen: tab.isCloseable ? tab.id === tabId : true,
    }));

    commit(types.SET_TABS, newTabs);
  },
  selectTab: ({ commit, state }, tabId) => {
    const newTabs = state.tabs.map((tab) => ({
      ...tab,
      isSelected: tab.id === tabId,
    }));

    commit(types.SET_TABS, newTabs);
  },
};

const mutations = {
  [types.SET_TABS]: (state, newTabs) => (state.tabs = newTabs),
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
