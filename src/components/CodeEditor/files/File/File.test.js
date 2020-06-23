import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import File from "./File.vue";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("CodeEditor/File.vue", () => {
  let store;

  beforeEach(() => {
    const tabs = {
      namespaced: true,
      actions: {
        selectTab: jest.fn()
      },
      getters: {
        openTabIds: () => [1, 2]
      }
    };
    store = new Vuex.Store({
      modules: {
        tabs
      }
    });
  });

  it("should show code tag if a code file", () => {
    const wrapper = shallowMount(File, {
      propsData: {
        id: 1,
        code: "<p>test</p>"
      },
      store,
      localVue
    });

    expect(wrapper.find("code").exists()).toBeTruthy();
  });

  it("should display slot if defined", () => {
    const wrapper = shallowMount(File, {
      propsData: {
        id: 2
      },
      slots: {
        default: "Lorem lorem lorem lorem"
      },
      store,
      localVue
    });

    expect(wrapper.text()).toBe("Lorem lorem lorem lorem");
  });
});
