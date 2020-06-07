<template>
  <button :class="$style.button" :disabled="disabled" @click="onClick">
    <slot />
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick(event) {
      this.$emit("click", event);
    }
  }
};
</script>

<style module>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 25px;
  min-width: 150px;
  font-weight: var(--weight-bold);
  text-transform: uppercase;
  letter-spacing: 1px;
  background: transparent;
  color: var(--light-300);
  border: 2px solid var(--light-300);
  cursor: pointer;
  outline: 0;
  transition: 0.1s background-color, color ease-in;
}

.button svg {
  margin-right: 15px;
}

.button:hover {
  background-color: var(--light-300);
  color: var(--dark-300);
}
</style>
