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

const desktopTabs = [
  {
    id: TAB_IDS.IntroInCode,
    path: TAB_PATHS.IntroInCode,
    isOpen: true,
    isCloseable: false,
    title: "index.html",
  },
  {
    id: TAB_IDS.AboutMe,
    path: TAB_PATHS.AboutMe,
    isOpen: true,
    isCloseable: true,
    title: "about-me.html",
  },
  {
    id: TAB_IDS.PlaySnake,
    path: TAB_PATHS.PlaySnake,
    isOpen: false,
    isCloseable: true,
    title: "play-snake.html",
  },
];

const mobileTabs = [
  {
    id: TAB_IDS.IntroInCode,
    path: TAB_PATHS.IntroInCode,
    isOpen: true,
    isCloseable: true,
    title: "index.html",
  },
  {
    id: TAB_IDS.AboutMe,
    path: TAB_PATHS.AboutMe,
    isOpen: false,
    isCloseable: true,
    title: "about-me.html",
  },
  {
    id: TAB_IDS.PlaySnake,
    path: TAB_PATHS.PlaySnake,
    isOpen: false,
    isCloseable: true,
    title: "play-snake.html",
  },
];

const state = () => ({
  tabs: desktopTabs,
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
  mobileView: ({ commit }) => {
    commit(types.SET_TABS, mobileTabs);
  },
  desktopView: ({ commit }) => {
    commit(types.SET_TABS, desktopTabs);
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
