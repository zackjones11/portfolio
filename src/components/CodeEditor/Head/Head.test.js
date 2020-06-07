import { shallowMount } from "@vue/test-utils";
import Head from "./Head.vue";
import HeadButton from "../HeadButton";

describe("CodeEditor/Head.vue", () => {
  it("should show 3 dots", () => {
    const wrapper = shallowMount(Head);
    expect(wrapper.findAllComponents(HeadButton).length).toEqual(3);
  });
});
