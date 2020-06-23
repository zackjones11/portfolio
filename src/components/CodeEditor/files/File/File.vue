<template>
  <div
    :class="$style.file"
    v-if="openTabIds.includes(id)"
    @click="selectTab(id)"
  >
    <div :class="$style.file__inner">
      <code v-if="code" class="language-markup">{{ code }}</code>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import "../../../../code-theme.css";

export default {
  name: "CodeEditorFile",
  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      default: "Untitled"
    },
    code: {
      type: String,
      default: ""
    }
  },
  computed: mapGetters("tabs", ["openTabIds"]),
  methods: {
    ...mapActions({
      selectTab: "tabs/selectTab"
    })
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
  height: calc(100% - 100px);
}

.file__inner::-webkit-scrollbar {
  width: 1em;
}

.file__inner::-webkit-scrollbar-thumb {
  background-color: var(--dark-500);
}
</style>
