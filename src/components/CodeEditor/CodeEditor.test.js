import { mount, shallowMount } from "@vue/test-utils";
import CodeEditor, { TAB_INDEXES } from "./CodeEditor.vue";

jest.mock("./intro-in-code.txt", () => "<p>intro in code</p>");

const stubs = {
  BaseButton: true,
  BaseHeadline: true,
  BaseLink: true,
  BaseIcon: true
};

describe("CodeEditor.vue", () => {
  it("should initially show Intro in Code and About Me", () => {
    const wrapper = mount(CodeEditor, {
      stubs
    });

    expect(wrapper.vm.activeTabs).toEqual([
      TAB_INDEXES.IntroInCode,
      TAB_INDEXES.AboutMe
    ]);
  });

  it("should show snake game when method triggered", () => {
    const wrapper = shallowMount(CodeEditor, {
      stubs
    });

    wrapper.vm.handlePlaySnake();

    expect(wrapper.vm.activeTabs).toEqual([
      TAB_INDEXES.IntroInCode,
      TAB_INDEXES.PlaySnake
    ]);
  });
});
