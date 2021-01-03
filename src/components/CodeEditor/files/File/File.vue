<template>
  <div :class="$style.file" v-if="openTabIds.includes(id)">
    <div :class="$style.file__inner">
      <code v-if="code" class="language-markup">{{ code }}</code>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import "@/code-theme.css";
import Prism from "prismjs";

export default {
  name: "CodeEditorFile",
  updated() {
    if (this.code) {
      Prism.highlightAll();
    }
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      default: "Untitled",
    },
    code: {
      type: String,
      default: "",
    },
  },
  computed: mapGetters("tabs", ["openTabIds"]),
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
  height: calc(100% - 100px);
}

.file__inner::-webkit-scrollbar {
  width: 1em;
}

.file__inner::-webkit-scrollbar-thumb {
  background-color: var(--dark-500);
}
</style>
