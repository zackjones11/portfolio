<template>
  <div :class="$style.tabGroup">
    <Tab
      v-for="tab in openTabs"
      :key="tab.id"
      :id="tab.id"
      :title="tab.title"
      @on-close="handleClose"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Tab from "../Tab";

export default {
  name: "CodeEditor",
  components: {
    Tab
  },
  computed: mapGetters("tabs", ["openTabs"]),
  methods: {
    ...mapActions({
      handleClose: "tabs/closeTab"
    })
  }
};
</script>

<style module>
.tabGroup {
  display: flex;
}
</style>
