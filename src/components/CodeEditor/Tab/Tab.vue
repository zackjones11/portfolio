<template>
  <div
    :class="[$style.tab, { [$style['tab--selected']]: isSelected }]"
    @click="onClick"
  >
    <span data-test-id="tabTitle">{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: "CodeEditorTab",
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      default: "Untitled"
    },
    isSelected: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick() {
      this.$emit("click", this.id);
    }
  }
};
</script>

<style module>
.tab {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 35px;
  width: 270px;
  font-size: 13px;
  background: var(--dark-300);
  color: var(--light-500);
  letter-spacing: 1px;
  opacity: 0.5;
  user-select: none;
  cursor: pointer;
}

.tab--selected {
  opacity: 1;
}

.tab:not(:last-child):after {
  content: "";
  position: absolute;
  height: 40%;
  width: 1px;
  background: var(--dark-500);
  right: 0;
}

.tab__close:hover {
  opacity: 1;
}
</style>
