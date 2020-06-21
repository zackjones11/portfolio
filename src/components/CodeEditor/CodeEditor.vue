<template>
  <div :class="$style.editor">
    <Head />
    <TabGroup />
    <div :class="$style.editor__content">
      <File
        v-if="allTabs.find(({ id, isOpen }) => id === 1 && isOpen)"
        v-bind:is-first="true"
        :code="introInCode"
        :id="1"
        @click="selectTab"
      />

      <File
        v-if="allTabs.find(({ id, isOpen }) => id === 2 && isOpen)"
        :id="2"
        @click="selectTab"
      >
        <div :class="$style.editor__block">
          <BaseHeadline :level="3">Professional Me</BaseHeadline>
          <p>
            I am a developer with over 6 years' experience mostly working with
            frontend technologies on a variety of exciting projects. I have
            worked with agencies such as
            <BaseLink href="https://6rs.co.uk" target="_blank"
              >sixredsquares</BaseLink
            >
            and
            <BaseLink href="http://nodelondon.com" target="_blank"
              >node london</BaseLink
            >, small start-ups like
            <BaseLink href="https://www.thebloggerprogramme.com" target="_blank"
              >The Blogger Programme</BaseLink
            >
            and larger corporations including
            <BaseLink href="https://www.skygroup.sky" target="_blank"
              >Sky UK</BaseLink
            >
            and
            <BaseLink href="https://aboutyou.de" target="_blank"
              >ABOUT YOU GmbH <BaseIcon name="unicorn"/></BaseLink
            >. Want to know more?
            <BaseLink
              download
              downloadName="Zack_Jones_CV"
              href="/Zack_Jones_CV.pdf"
              >Download my CV</BaseLink
            >.
          </p>
        </div>

        <div :class="$style.editor__block">
          <BaseHeadline :level="3">Personal Me</BaseHeadline>
          <p>
            My long standing hobbies are traveling, CrossFit, fashion and
            spending as much time as possible with loved ones while sipping on a
            crafted flat white in a small café people watching.
          </p>

          <p>
            I am one of those people with ever changing hobbies though, whenever
            I hear of something that sounds the slightest bit interesting I need
            to give it a go. My latest in this discovery phrase is standup
            paddling and slacklining (which I can safely say is
            <span :class="$style.editor__strike">slightly</span> much harder
            than originally thought).
          </p>
        </div>

        <div :class="$style.editor__block">
          <BaseHeadline :level="3">Social Me</BaseHeadline>
          <div :class="$style.editor__socialButtons">
            <BaseLink href="https://github.com/zackjones11" target="_blank">
              <BaseButton>
                <BaseIcon name="github" />
                Github
              </BaseButton>
            </BaseLink>

            <BaseLink
              href="https://www.linkedin.com/in/zack-jones-6b76802b/"
              target="_blank"
            >
              <BaseButton>
                <BaseIcon name="linkedin" />
                LinkedIn
              </BaseButton>
            </BaseLink>

            <BaseButton @click="handlePlaySnake" data-test-id="playSnakeBtn">
              <BaseIcon name="square" :width="6" :height="6" />
              Play Snake
            </BaseButton>
          </div>
        </div>
      </File>

      <File
        :id="3"
        v-if="allTabs.find(({ id, isOpen }) => id === 3 && isOpen)"
        @click="selectTab"
      >
        <div :class="$style.editor__gameWrap">
          <SnakeGame />
        </div>
      </File>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Head from "./Head";
import File from "./File";
import TabGroup from "./TabGroup";
import SnakeGame from "../SnakeGame";
import introInCode from "./intro-in-code.txt";

export default {
  name: "CodeEditor",
  components: {
    Head,
    File,
    TabGroup,
    SnakeGame
  },
  data() {
    return { introInCode };
  },
  computed: mapGetters("tabs", ["allTabs"]),
  methods: {
    handlePlaySnake() {
      this.openTab(3);
      this.selectTab(3);
    },
    ...mapActions({
      openTab: "tabs/openTab",
      selectTab: "tabs/selectTab"
    })
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

.editor__block {
  margin-bottom: 45px;
}

.editor__socialButtons {
  display: grid;
  grid-gap: 15px;
  grid-auto-flow: column;
  justify-content: flex-start;
}

.editor__strike {
  text-decoration: line-through;
}

.editor__gameWrap {
  display: block;
  height: 100%;
  margin-bottom: 15px;
}
</style>
