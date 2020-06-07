import { shallowMount } from "@vue/test-utils";
import BaseHeadline from "./BaseHeadline.vue";

describe("BaseHeadline.vue", () => {
  it("should render a slot", () => {
    const wrapper = shallowMount(BaseHeadline, {
      propsData: {
        level: 1
      },
      slots: {
        default: "Headline Text"
      }
    });

    expect(wrapper.text()).toBe("Headline Text");
  });

  it("should render correct level (H3)", () => {
    const wrapper = shallowMount(BaseHeadline, {
      propsData: {
        level: 3
      },
      slots: {
        default: "Headline Text"
      }
    });

    expect(wrapper.find("h3").exists()).toBe(true);
  });
});
