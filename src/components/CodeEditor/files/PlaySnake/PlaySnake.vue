<template>
  <File :id="TAB_IDS.PlaySnake">
    <div :class="$style.playSnake__wrapper">
      <SnakeGame />
    </div>
  </File>
</template>

<script>
import { TAB_IDS } from "../../../../store/modules/tabs";
import File from "../File";
import SnakeGame from "../../../SnakeGame";

export default {
  name: "PlaySnake",
  components: { File, SnakeGame },
  data() {
    return { TAB_IDS };
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
