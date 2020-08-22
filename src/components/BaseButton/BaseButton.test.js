import { shallowMount } from "@vue/test-utils";
import BaseButton from "./BaseButton.vue";

describe("BaseButton.vue", () => {
  it("should trigger a click event", async () => {
    const wrapper = shallowMount(BaseButton);

    wrapper.find("button").trigger("click");
    wrapper.vm.$emit("click", "clicked");

    await wrapper.vm.$nextTick();

    expect(wrapper.emitted().click[1]).toEqual(["clicked"]);
  });

  it("should display slot as text", () => {
    const wrapper = shallowMount(BaseButton, {
      slots: {
        default: "Click Me",
      },
    });

    expect(wrapper.text()).toBe("Click Me");
  });
});
