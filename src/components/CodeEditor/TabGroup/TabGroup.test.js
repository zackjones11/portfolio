import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Tab from "../Tab";
import TabGroup from "./TabGroup.vue";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("CodeEditor/TabGroup.vue", () => {
  let store;

  beforeEach(() => {
    const tabs = {
      namespaced: true,
      actions: {
        closeTab: jest.fn()
      },
      getters: {
        allTabs: () => [{ id: 1 }, { id: 2 }]
      }
    };
    store = new Vuex.Store({
      modules: {
        tabs
      }
    });
  });

  it('should render "store.getters.tabs.allTabs"', () => {
    const wrapper = shallowMount(TabGroup, { store, localVue });
    expect(wrapper.findAllComponents(Tab)).toHaveLength(2);
  });
});
