import { shallowMount } from "@vue/test-utils";
import BaseLink from "./BaseLink.vue";

describe("BaseLink.vue", () => {
  it("should include href", () => {
    const wrapper = shallowMount(BaseLink, {
      propsData: {
        href: "https://www.google.com",
      },
    });

    expect(wrapper.find("a").attributes("href")).toBe("https://www.google.com");
  });

  it("should add download attribute", () => {
    const wrapper = shallowMount(BaseLink, {
      propsData: {
        href: "./placeholder.pdf",
        download: true,
        downloadName: "Placeholder",
      },
    });

    expect(wrapper.find("a").attributes("download")).toBe("Placeholder");
  });
});
