<template>
  <div :class="$style.tabGroup">
    <Tab
      v-for="tab in allTabs"
      :key="tab.id"
      :id="tab.id"
      :title="tab.title"
      :isSelected="tab.isSelected"
      :isCloseable="tab.isCloseable"
      @close="handleClose"
      @click="handleClick"
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
  computed: mapGetters("tabs", ["allTabs"]),
  methods: {
    ...mapActions({
      handleClose: "tabs/closeTab",
      openTab: "tabs/openTab",
      selectTab: "tabs/selectTab"
    }),
    handleClick(tabId) {
      this.selectTab(tabId);
      this.openTab(tabId);
    }
  }
};
</script>

<style module>
.tabGroup {
  display: flex;
}
</style>
