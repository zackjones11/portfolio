import { mount } from "@vue/test-utils";
import BaseIcon from "./BaseIcon.vue";

describe("BaseIcon.vue", () => {
  it("should render SVG", () => {
    const wrapper = mount(BaseIcon, {
      propsData: {
        name: "mock-svg"
      },
      computed: {
        icon() {
          return () => (
            <svg>
              <path />
            </svg>
          );
        }
      }
    });
    expect(wrapper.find("#mock-svg").exists()).toBe(true);
  });
});
