<template>
  <div :class="$style.editor">
    <CodeEditorHeader />
    <div :class="$style.editor__content">
      <CodeEditorFile v-bind:is-first="true">
        <strong>START</strong> Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Excepturi rerum maiores commodi eveniet quaerat
        accusantium vitae odio facilis, perspiciatis sunt, deleniti repellendus.
        Adipisci facilis quidem dicta praesentium consequatur dolor soluta.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
        nihil, tenetur veritatis vel deleniti exercitationem vero voluptates
        vitae quibusdam tempore perferendis explicabo! Id illo necessitatibus
        libero error temporibus culpa corrupti! loremLorem ipsum dolor sit amet
        consectetur adipisicing elit. Excepturi rerum maiores commodi eveniet
        quaerat accusantium vitae odio facilis, perspiciatis sunt, deleniti
        repellendus. Adipisci facilis quidem dicta praesentium consequatur dolor
        soluta. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Doloremque nihil, tenetur veritatis vel deleniti exercitationem vero
        voluptates vitae quibusdam tempore perferendis explicabo! Id illo
        necessitatibus libero error temporibus culpa corrupti! loremLorem ipsum
        dolor sit amet consectetur adipisicing elit. Excepturi rerum maiores
        commodi eveniet quaerat accusantium vitae odio facilis, perspiciatis
        sunt, deleniti repellendus. Adipisci facilis quidem dicta praesentium
        consequatur dolor soluta. Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Doloremque nihil, tenetur veritatis vel deleniti
        exercitationem vero voluptates vitae quibusdam tempore perferendis
        explicabo! Id illo necessitatibus libero error temporibus culpa
        corrupti! loremLorem ipsum dolor sit amet consectetur adipisicing elit.
        Excepturi rerum maiores commodi eveniet quaerat accusantium vitae odio
        facilis, perspiciatis sunt, deleniti repellendus. Adipisci facilis
        quidem dicta praesentium consequatur dolor soluta. Lorem ipsum dolor
        sit, amet consectetur adipisicing elit. Doloremque nihil, tenetur
        veritatis vel deleniti exercitationem vero voluptates vitae quibusdam
        tempore perferendis explicabo! Id illo necessitatibus libero error
        temporibus culpa corrupti! loremLorem ipsum dolor sit amet consectetur
        adipisicing elit. Excepturi rerum maiores commodi eveniet quaerat
        accusantium vitae odio facilis, perspiciatis sunt, deleniti repellendus.
        Adipisci facilis quidem dicta praesentium consequatur dolor soluta.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
        nihil, tenetur veritatis vel deleniti exercitationem vero voluptates
        vitae quibusdam tempore perferendis explicabo! Id illo necessitatibus
        libero error temporibus culpa corrupti! loremLorem ipsum dolor sit amet
        consectetur adipisicing elit. Excepturi rerum maiores commodi eveniet
        quaerat accusantium vitae odio facilis, perspiciatis sunt, deleniti
        repellendus. Adipisci facilis quidem dicta praesentium consequatur dolor
        soluta. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Doloremque nihil, tenetur veritatis vel deleniti exercitationem vero
        voluptates vitae quibusdam tempore perferendis explicabo! Id illo
        necessitatibus libero error temporibus culpa corrupti! loremLorem ipsum
        dolor sit amet consectetur adipisicing elit. Excepturi rerum maiores
        commodi eveniet quaerat accusantium vitae odio facilis, perspiciatis
        sunt, deleniti repellendus. Adipisci facilis quidem dicta praesentium
        consequatur dolor soluta. Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Doloremque nihil, tenetur veritatis vel deleniti
        exercitationem vero voluptates vitae quibusdam tempore perferendis
        explicabo! Id illo necessitatibus libero error temporibus culpa
        corrupti! loremLorem ipsum dolor sit amet consectetur adipisicing elit.
        Excepturi rerum maiores commodi eveniet quaerat accusantium vitae odio
        facilis, perspiciatis sunt, deleniti repellendus. Adipisci facilis
        quidem dicta praesentium consequatur dolor soluta. Lorem ipsum dolor
        sit, amet consectetur adipisicing elit. Doloremque nihil, tenetur
        veritatis vel deleniti exercitationem vero voluptates vitae quibusdam
        tempore perferendis explicabo! Id illo necessitatibus libero error
        temporibus culpa corrupti! loremLorem ipsum dolor sit amet consectetur
        adipisicing elit. Excepturi rerum maiores commodi eveniet quaerat
        accusantium vitae odio facilis, perspiciatis sunt, deleniti repellendus.
        Adipisci facilis quidem dicta praesentium consequatur dolor soluta.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
        nihil, tenetur veritatis vel deleniti exercitationem vero voluptates
        vitae quibusdam tempore perferendis explicabo! Id illo necessitatibus
        libero error temporibus culpa corrupti! lorem <strong>END</strong>
      </CodeEditorFile>
      <CodeEditorFile type="plain">lorem lorem lorem</CodeEditorFile>
    </div>
  </div>
</template>

<script>
import CodeEditorHeader from "./CodeEditorHeader";
import CodeEditorFile from "./CodeEditorFile";

export default {
  name: "CodeEditor",
  components: {
    CodeEditorHeader,
    CodeEditorFile
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
