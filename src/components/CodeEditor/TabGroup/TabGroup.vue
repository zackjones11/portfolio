<template>
  <div :class="$style.tabGroup">
    <Tab
      v-for="tab in allTabs"
      :key="tab.id"
      :id="tab.id"
      :title="tab.title"
      :isSelected="tab.isSelected"
      :isCloseable="tab.isCloseable"
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
      openTab: "tabs/openTab",
      selectTab: "tabs/selectTab"
    }),
    handleClick(tabId) {
      this.openTab(tabId);
      this.selectTab(tabId);
    }
  }
};
</script>

<style module>
.tabGroup {
  display: flex;
}
</style>
