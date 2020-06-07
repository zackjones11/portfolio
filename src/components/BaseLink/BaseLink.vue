<template>
  <a
    :class="$style.link"
    :href="href"
    :target="target"
    :rel="rel"
    :download="download ? downloadName : false"
  >
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
    },
    rel: {
      type: String,
      default: "noopener"
    },
    download: {
      type: Boolean,
      default: false
    },
    downloadName: {
      type: String,
      default: "download"
    }
  }
};
</script>

<style module>
.link {
  text-decoration: none;
  color: var(--light-300);
  font-weight: var(--weight-bold);
}
</style>
