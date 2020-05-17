<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 18 18"
    :aria-labelledby="name"
    role="presentation"
  >
    <title :id="name" lang="en">{{ name }} icon</title>
    <g :fill="color">
      <component :is="icon" />
    </g>
  </svg>
</template>

<script>
export default {
  name: "BaseIcon",
  props: {
    name: {
      type: String,
      required: true
    },
    width: {
      type: Number,
      default: 18
    },
    height: {
      type: Number,
      default: 18
    },
    color: {
      type: String,
      default: "currentColor"
    }
  },
  computed: {
    icon() {
      return () =>
        import(
          /* webpackChunkName: "icons" */
          /* webpackMode: "lazy-once" */
          `../icons/${this.name}.svg`
        );
    }
  }
};
</script>
