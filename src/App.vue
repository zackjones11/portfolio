<template>
  <div :class="$style.app">
    <CodeEditor />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import CodeEditor from "./components/CodeEditor";

export default {
  name: "App",
  components: {
    CodeEditor,
  },
  created() {
    this.openTab(this.$route.meta.id);
  },
  methods: {
    ...mapActions({
      openTab: "tabs/openTab",
    }),
  },
  watch: {
    $route(to) {
      this.openTab(to.meta.id);
    },
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
