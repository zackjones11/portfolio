import { shallowMount } from "@vue/test-utils";
import CodeEditorFile from "./CodeEditorFile.vue";

describe("CodeEditorFile.vue", () => {
  it("should show code tag if a code file", () => {
    const wrapper = shallowMount(CodeEditorFile, {
      propsData: {
        code: "<p>test</p>"
      }
    });

    expect(wrapper.find("code").exists()).toBeTruthy();
  });

  it("should display slot if defined", () => {
    const wrapper = shallowMount(CodeEditorFile, {
      slots: {
        default: "Lorem lorem lorem lorem"
      }
    });

    expect(wrapper.text()).toBe("Lorem lorem lorem lorem");
  });
});
