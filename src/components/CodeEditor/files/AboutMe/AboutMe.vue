<template>
  <File :id="TAB_IDS.AboutMe">
    <div :class="$style.aboutMe__block">
      <BaseHeadline :level="3">Professional Me</BaseHeadline>
      <p>
        I am a developer with over {{ yearsOfExperience }} years' experience
        mostly working with frontend technologies on a variety of exciting
        projects. I have worked with agencies such as
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
          >ABOUT YOU GmbH <BaseIcon name="unicorn" /></BaseLink
        >. Want to know more?
        <BaseLink target="_blank" :href="CV_URL">View my CV</BaseLink>.
      </p>
    </div>

    <div :class="$style.aboutMe__block">
      <BaseHeadline :level="3">Personal Me</BaseHeadline>
      <p>
        My long standing hobbies are traveling, CrossFit, fashion and spending
        as much time as possible with loved ones while sipping on a crafted flat
        white in a small café people watching.
      </p>

      <p>
        I am one of those people with ever changing hobbies though, whenever I
        hear of something that sounds the slightest bit interesting I need to
        give it a go. My latest in this discovery phrase is standup paddling and
        slacklining (which I can safely say is
        <span :class="$style.aboutMe__strike">slightly</span> much harder than
        originally thought).
      </p>
    </div>

    <div :class="$style.aboutMe__block">
      <BaseHeadline :level="3">Social Me</BaseHeadline>
      <div :class="$style.aboutMe__socialButtons">
        <BaseLink href="https://github.com/zackjones11" target="_blank">
          <BaseButton>
            <BaseIcon name="github" />
            Github
          </BaseButton>
        </BaseLink>

        <BaseLink
          href="https://www.linkedin.com/in/zack-jones-dev/"
          target="_blank"
        >
          <BaseButton>
            <BaseIcon name="linkedin" />
            LinkedIn
          </BaseButton>
        </BaseLink>

        <BaseButton @click="router.push(TAB_PATHS.PlaySnake)">
          <BaseIcon name="square" :width="6" :height="6" />
          Play Snake
        </BaseButton>
      </div>
    </div>
  </File>
</template>

<script>
import { CV_URL } from "@/constants";
import router from "@/router";
import { TAB_IDS, TAB_PATHS } from "@/store/modules/tabs";
import File from "../File";
import { yearsDifference } from "@/utils";

export default {
  name: "AboutMe",
  components: { File },
  data() {
    return { router, CV_URL, TAB_IDS, TAB_PATHS };
  },
  computed: {
    yearsOfExperience() {
      const firstDay = "September 1, 2013";
      return yearsDifference({ start: firstDay });
    },
  },
};
</script>

<style module>
.aboutMe__socialButtons {
  display: grid;
  grid-gap: 15px;
  grid-auto-flow: row;
}

@media (min-width: 1285px) {
  .aboutMe__socialButtons {
    grid-auto-flow: column;
    justify-content: flex-start;
  }
}

.aboutMe__block {
  margin-bottom: 45px;
}

.aboutMe__strike {
  text-decoration: line-through;
}
</style>
