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
    PlaySnake,
  },
};
</script>

<style module>
.editor {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  border-radius: 5px;
  background: var(--dark-300);
  border: 2px solid var(--dark-500);
}

@media (min-width: 950px) {
  .editor {
    overflow: hidden;
    height: 100%;
  }
}

.editor__content {
  display: flex;
  flex-direction: column;
  height: 100%;
}

@media (min-width: 950px) {
  .editor__content {
    flex-direction: row;
  }
}
</style>
