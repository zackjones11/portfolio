<template>
  <File :code="introInCode" :id="TAB_IDS.IntroInCode" />
</template>

<script>
import { TAB_IDS } from "@/store/modules/tabs";
import File from "../File";
import introInCode from "./intro-in-code.txt";

export default {
  name: "IntroInCode",
  components: { File },
  data() {
    return { TAB_IDS, introInCode };
  },
};
</script>
