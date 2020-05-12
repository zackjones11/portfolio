<template>
  <div :class="$style.container">
    <CodeEditorFileTab :isFirst="isFirst" />
    <slot></slot>
  </div>
</template>

<script>
import CodeEditorFileTab from "./CodeEditorFileTab";

export default {
  name: "CodeEditorFile",
  components: {
    CodeEditorFileTab
  },
  props: {
    isFirst: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style module>
.container {
  position: relative;
  flex: 1 0;
  color: var(--light-100);
  padding: 20px;
}

.container::before {
  content: "";
  display: block;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 20px;
  background-color: var(--dark-300);
}
</style>
