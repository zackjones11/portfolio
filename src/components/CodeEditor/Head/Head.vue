<template>
  <div :class="$style.header">
    <div :class="$style.header__actions">
      <HeadButton color="red" />
      <HeadButton color="yellow" />
      <HeadButton color="green" />
    </div>
  </div>
</template>

<script>
import HeadButton from "../HeadButton";

export default {
  name: "CodeEditor__Head",
  components: {
    HeadButton
  }
};
</script>

<style module>
.header {
  display: flex;
  align-items: center;
  background-color: var(--dark-500);
  padding: 0 15px;
  height: 45px;
  width: 100%;
}

.header__actions {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
