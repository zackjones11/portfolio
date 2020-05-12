<template>
  <div :class="[$style.tab, { [$style.tab__first]: isFirst }]">
    {{ title }}
  </div>
</template>

<script>
export default {
  name: "CodeEditorFileTab",
  props: {
    title: {
      type: String,
      default: "Untitled"
    },
    isFirst: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style module>
.tab {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -35px;
  left: 0;
  height: 35px;
  width: 270px;
  font-size: 13px;
  background: var(--dark-300);
  color: var(--light-500);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  letter-spacing: 1px;
}

.tab__first {
  left: 90px;
}
</style>
