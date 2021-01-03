<template>
  <div :class="$style.tabGroup">
    <Tab
      v-for="tab in allTabs"
      :key="tab.id"
      :id="tab.id"
      :path="tab.path"
      :title="tab.title"
      :isCloseable="tab.isCloseable"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Tab from "../Tab";

export default {
  name: "CodeEditorTabGroup",
  components: {
    Tab,
  },
  computed: mapGetters("tabs", ["allTabs"]),
};
</script>

<style module>
.tabGroup {
  display: flex;
}
</style>
