<template>
  <File :id="TAB_IDS.PlaySnake">
    <SnakeGame />
  </File>
</template>

<script>
import { TAB_IDS } from "@/store/modules/tabs";
import SnakeGame from "@/components/SnakeGame";
import File from "../File";

export default {
  name: "PlaySnake",
  components: { File, SnakeGame },
  data() {
    return { TAB_IDS };
  },
};
</script>
