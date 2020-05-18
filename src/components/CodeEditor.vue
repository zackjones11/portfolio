<template>
  <div :class="$style.editor">
    <CodeEditorHeader />
    <div :class="$style.editor__content">
      <CodeEditorFile v-bind:is-first="true" :code="introInCode" />
      <CodeEditorFile>
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
              >ABOUT YOU GmbH</BaseLink
            >.
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
          </div>
        </div>
      </CodeEditorFile>
    </div>
  </div>
</template>

<script>
import CodeEditorHeader from "./CodeEditorHeader";
import CodeEditorFile from "./CodeEditorFile";

import introInCode from "./intro-in-code.txt";

export default {
  name: "CodeEditor",
  components: {
    CodeEditorHeader,
    CodeEditorFile
  },
  data() {
    return {
      introInCode
    };
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
</style>
