import { shallowMount } from "@vue/test-utils";
import CodeEditorFileTab from "./CodeEditorFileTab.vue";

describe("CodeEditorFileTab.vue", () => {
  it("should change left position if isFirt", () => {
    const wrapper = shallowMount(CodeEditorFileTab, {
      propsData: {
        isFirst: true
      }
    });

    expect(wrapper.find(".tab__first").exists()).toBeTruthy();
  });

  it("should show Untitled if no title passed", () => {
    const wrapper = shallowMount(CodeEditorFileTab);

    expect(wrapper.find(".tab").text()).toBe("Untitled");
  });

  it("should show defiend title if passed", () => {
    const wrapper = shallowMount(CodeEditorFileTab, {
      propsData: {
        title: "About Me"
      }
    });

    expect(wrapper.find(".tab").text()).toBe("About Me");
  });
});
