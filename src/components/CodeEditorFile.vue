<template>
  <div :class="$style.file">
    <CodeEditorFileTab :isFirst="isFirst" />
    <div :class="$style.file__inner">
      <slot></slot>
    </div>
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
.file {
  position: relative;
  flex: 1 0;
  color: var(--light-100);
}

.file::before {
  content: "";
  display: block;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 20px;
  background-color: var(--dark-300);
}

.file__inner {
  overflow: auto;
  padding: 20px;
  height: calc(100% - 50px);
}

.file__inner::-webkit-scrollbar {
  width: 1em;
}

.file__inner::-webkit-scrollbar-thumb {
  background-color: var(--dark-500);
}
</style>
