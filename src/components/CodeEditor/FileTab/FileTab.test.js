import { shallowMount } from "@vue/test-utils";
import FileTab from "./FileTab.vue";

describe("CodeEditor/FileTab.vue", () => {
  it("should change left position if isFirt", () => {
    const wrapper = shallowMount(FileTab, {
      propsData: {
        isFirst: true
      }
    });

    expect(wrapper.find(".tab__first").exists()).toBeTruthy();
  });

  it("should show Untitled if no title passed", () => {
    const wrapper = shallowMount(FileTab);

    expect(wrapper.find(".tab").text()).toBe("Untitled");
  });

  it("should show defiend title if passed", () => {
    const wrapper = shallowMount(FileTab, {
      propsData: {
        title: "About Me"
      }
    });

    expect(wrapper.find(".tab").text()).toBe("About Me");
  });
});
