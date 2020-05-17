<template>
  <a :class="$style.link" :href="href" :target="target">
    <slot />
  </a>
</template>

<script>
export default {
  name: "BaseLink",
  props: {
    href: {
      type: String,
      required: true
    },
    target: {
      type: String,
      validator: prop =>
        ["_blank", "_self", "_parent", "_top", "framename"].includes(prop)
    }
  }
};
</script>

<style module>
.link {
  text-decoration: none;
}
</style>
