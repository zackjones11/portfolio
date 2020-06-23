<template>
  <div :class="$style.editor">
    <Head />
    <TabGroup />
    <div :class="$style.editor__content">
      <IntroInCode />
      <AboutMe />
      <PlaySnake />
    </div>
  </div>
</template>

<script>
import Head from "./Head";
import TabGroup from "./TabGroup";
import IntroInCode from "./files/IntroInCode";
import AboutMe from "./files/AboutMe";
import PlaySnake from "./files/PlaySnake";

export default {
  name: "CodeEditor",
  components: {
    Head,
    TabGroup,
    IntroInCode,
    AboutMe,
    PlaySnake
  }
};
</script>

<style module>
.editor {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 5px;
  background: var(--dark-300);
  border: 2px solid var(--dark-500);
}

.editor__content {
  display: flex;
  flex-direction: row;
  height: 100%;
}
</style>
