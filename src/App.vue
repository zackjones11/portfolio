<template>
  <div :class="$style.app">
    <CodeEditor />
  </div>
</template>

<script>
import CodeEditor from "./components/CodeEditor";

export default {
  name: "App",
  components: {
    CodeEditor,
  },
  data() {
    return {};
  },
};
</script>

<style module>
.app {
  width: 100vw;
  height: 100vh;
  padding: 20px;
}
</style>
