import { shallowMount } from "@vue/test-utils";
import CodeEditorHeader from "./CodeEditorHeader.vue";
import CodeEditorHeaderButton from "./CodeEditorHeaderButton.vue";

describe("CodeEditorHeader.vue", () => {
  it("should show 3 dots", () => {
    const wrapper = shallowMount(CodeEditorHeader);
    expect(wrapper.findAllComponents(CodeEditorHeaderButton).length).toEqual(3);
  });
});
