import { shallowMount } from "@vue/test-utils";
import Tab from "./Tab.vue";

describe("CodeEditor/Tab.vue", () => {
  it("should show Untitled if no title passed", () => {
    const wrapper = shallowMount(Tab, {
      propsData: {
        id: 1
      }
    });

    expect(wrapper.find("[data-test-id='tabTitle']").text()).toBe("Untitled");
  });

  it("should show defiend title if passed", () => {
    const wrapper = shallowMount(Tab, {
      propsData: {
        id: 1,
        title: "About Me"
      }
    });

    expect(wrapper.find("[data-test-id='tabTitle']").text()).toBe("About Me");
  });
});
