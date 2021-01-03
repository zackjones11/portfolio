<template>
  <div :class="$style.app">
    <CodeEditor />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import CodeEditor from "./components/CodeEditor";
import { DESKTOP_BREAKPOINT } from "@/constants";

export default {
  name: "App",
  components: {
    CodeEditor,
  },
  created() {
    this.openTab(this.$route.meta.id);
    this.displayCorrectLayout();
  },
  methods: {
    ...mapActions({
      openTab: "tabs/openTab",
      mobileView: "tabs/mobileView",
      desktopView: "tabs/desktopView",
    }),
    displayCorrectLayout() {
      if (window.innerWidth < DESKTOP_BREAKPOINT) {
        this.mobileView();
        return;
      }

      this.desktopView();
    },
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
