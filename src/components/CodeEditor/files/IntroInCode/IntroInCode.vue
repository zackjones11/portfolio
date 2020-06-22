<template>
  <File :code="introInCode" @click="selectTab" />
</template>

<script>
import { mapActions } from "vuex";
import File from "../File";
import introInCode from "./intro-in-code.txt";

export default {
  name: "IntroInCode",
  components: { File },
  data() {
    return { introInCode };
  },
  methods: {
    ...mapActions({
      openTab: "tabs/openTab",
      selectTab: "tabs/selectTab"
    })
  }
};
</script>
