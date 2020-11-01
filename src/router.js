import Vue from "vue";
import Router from "vue-router";

import IntroInCode from "@/components/CodeEditor/files/IntroInCode";
import AboutMe from "@/components/CodeEditor/files/AboutMe";
import PlaySnake from "@/components/CodeEditor/files/PlaySnake";

import { TAB_PATHS } from "@/store/modules/tabs";
import { TAB_IDS } from "./store/modules/tabs";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      name: "IntroInCode",
      path: TAB_PATHS.IntroInCode,
      meta: { id: TAB_IDS.IntroInCode },
      component: IntroInCode,
    },
    {
      name: "AboutMe",
      path: TAB_PATHS.AboutMe,
      meta: { id: TAB_IDS.AboutMe },
      component: AboutMe,
    },
    {
      name: "PlaySnake",
      path: TAB_PATHS.PlaySnake,
      meta: { id: TAB_IDS.PlaySnake },
      component: PlaySnake,
    },
  ],
});
