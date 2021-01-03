import * as types from "../mutation-types";

const state = () => ({
  windowSize: { width: 0, height: 0 },
});

const getters = {
  windowSize: (state) => state.windowSize,
  onlyHeightChange: (state) => (newWindow) =>
    newWindow.innerHeight !== state.windowSize.height &&
    newWindow.innerWidth === state.windowSize.width,
};

const actions = {
  setWindowSize: (context, windowSize) => {
    const { commit } = context;

    commit(types.SET_WINDOW_SIZE, windowSize);
  },
};

const mutations = {
  [types.SET_WINDOW_SIZE]: (state, newWindowSize) =>
    (state.windowSize = newWindowSize),
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
