<template>
  <File
    v-if="allTabs.find(({ id, isOpen }) => id === 3 && isOpen)"
    @click="selectTab"
  >
    <div :class="$style.playSnake__wrapper">
      <SnakeGame />
    </div>
  </File>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import File from "./File";
import SnakeGame from "../../SnakeGame";

export default {
  name: "PlaySnake",
  components: { File, SnakeGame },
  computed: mapGetters("tabs", ["allTabs"]),
  methods: {
    ...mapActions({
      openTab: "tabs/openTab",
      selectTab: "tabs/selectTab"
    })
  }
};
</script>

<style module>
.playSnake__wrapper {
  display: block;
  height: 100%;
  margin-bottom: 15px;
}
</style>
