<template>
  <div :class="$style.app">
    <CodeEditor />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import router from "./router";
import CodeEditor from "./components/CodeEditor";
import { TAB_PATHS } from "./store/modules/tabs";

export default {
  name: "App",
  components: {
    CodeEditor,
  },
  created() {
    this.openTab(this.$route.meta.id);

    window.addEventListener("resize", this.handleWindowResize);
  },
  methods: {
    ...mapActions({
      openTab: "tabs/openTab",
      mobileView: "tabs/mobileView",
      desktopView: "tabs/desktopView",
    }),
    handleWindowResize() {
      if (this.$route.path !== TAB_PATHS.IntroInCode) {
        router.push(TAB_PATHS.IntroInCode);
      }

      if (window.innerWidth < 950) {
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
