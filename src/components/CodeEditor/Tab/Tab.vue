<template>
  <div :class="$style.tab">
    <span data-test-id="tabTitle">{{ title }}</span>
    <button :class="$style.tab__close" @click="onClose">x</button>
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
    }
  },
  methods: {
    onClose() {
      this.$emit("on-close", this.id);
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
}

.tab:not(:last-child):after {
  content: "";
  position: absolute;
  height: 40%;
  width: 1px;
  background: var(--dark-500);
  right: 0;
}

.tab__close {
  position: absolute;
  right: 15px;
  font-size: 10px;
  cursor: pointer;
  font-weight: var(--weight-bold);
  opacity: 0.5;
  background: none;
  border: none;
  color: white;
  outline: 0;
}

.tab__close:hover {
  opacity: 1;
}
</style>
