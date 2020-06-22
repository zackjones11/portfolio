<template>
  <File
    v-if="allTabs.find(({ id, isOpen }) => id === 1 && isOpen)"
    :code="introInCode"
    @click="selectTab"
  />
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import File from "./File";
import introInCode from "./intro-in-code.txt";

export default {
  name: "IntroInCode",
  components: { File },
  data() {
    return { introInCode };
  },
  computed: mapGetters("tabs", ["allTabs"]),
  methods: {
    ...mapActions({
      openTab: "tabs/openTab",
      selectTab: "tabs/selectTab"
    })
  }
};
</script>
