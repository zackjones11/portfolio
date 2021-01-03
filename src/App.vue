<template>
  <div :class="$style.app">
    <CodeEditor />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import router from "./router";
import CodeEditor from "./components/CodeEditor";
import { TAB_PATHS } from "./store/modules/tabs";
import { DESKTOP_BREAKPOINT } from "@/constants";

export default {
  name: "App",
  components: {
    CodeEditor,
  },
  created() {
    this.openTab(this.$route.meta.id);

    this.handleWindowResize();
    window.addEventListener("resize", this.handleWindowResize);
  },
  computed: mapGetters("viewport", ["onlyHeightChange"]),
  methods: {
    ...mapActions({
      openTab: "tabs/openTab",
      mobileView: "tabs/mobileView",
      desktopView: "tabs/desktopView",
      setWindowSize: "viewport/setWindowSize",
    }),
    handleWindowResize() {
      if (this.onlyHeightChange(window)) {
        return;
      }

      this.setWindowSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });

      if (this.$route.path !== TAB_PATHS.IntroInCode) {
        router.push(TAB_PATHS.IntroInCode);
      }

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
