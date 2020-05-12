<template>
  <div :class="[$style.button, $style[`button--${color}`]]"></div>
</template>

<script>
export default {
  name: "CodeEditorHeaderButton",
  props: {
    color: {
      type: String,
      required: true,
      validator: prop => ["green", "yellow", "red"].includes(prop)
    }
  }
};
</script>

<style module>
.button {
  display: inline-block;
  width: 14px;
  height: 14px;
  margin-right: 8px;
  border-radius: 50%;
}

.button:last-child {
  margin-right: 0;
}

.button--green {
  background-color: var(--light-green);
}

.button--yellow {
  background-color: var(--light-yellow);
}

.button--red {
  background-color: var(--light-red);
}
</style>
