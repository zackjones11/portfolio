<template>
  <div :class="$style.file">
    <FileTab :isFirst="isFirst" :title="name" />
    <div :class="$style.file__inner">
      <code v-if="code" class="language-markup">{{ code }}</code>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import FileTab from "../FileTab";
import "../../../code-theme.css";

export default {
  name: "CodeEditor__File",
  components: {
    FileTab
  },
  props: {
    isFirst: {
      type: Boolean,
      default: false
    },
    name: {
      type: String
    },
    code: {
      type: String,
      default: ""
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
