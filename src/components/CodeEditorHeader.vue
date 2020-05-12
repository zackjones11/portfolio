<template>
  <div :class="$style.header">
    <div :class="$style.header__actions">
      <CodeEditorHeaderButton color="red" />
      <CodeEditorHeaderButton color="yellow" />
      <CodeEditorHeaderButton color="green" />
    </div>
  </div>
</template>

<script>
import CodeEditorHeaderButton from "./CodeEditorHeaderButton";

export default {
  name: "CodeEditorHeader",
  components: {
    CodeEditorHeaderButton
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
