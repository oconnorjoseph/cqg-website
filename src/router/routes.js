import {
  HOME_PATH,
  ABOUT_PATH,
  EVENTS_PATH,
  RESEARCH_PATH,
  EDUCATION_PATH,
  CONTACT_PATH
} from "./paths";

export default [
  {
    component: () => import(/* webpackPrefetch: true */ "./../views/Home.vue"),
    name: "home",
    path: HOME_PATH
  },
  {
    component: () => import(/* webpackPrefetch: true */ "./../views/About.vue"),
    name: "about",
    path: ABOUT_PATH
  },
  {
    component: () =>
      import(/* webpackPrefetch: true */ "./../views/Events.vue"),
    name: "events",
    path: EVENTS_PATH
  },
  {
    component: () =>
      import(/* webpackPrefetch: true */ "./../views/Research.vue"),
    name: "research",
    path: RESEARCH_PATH
  },
  {
    component: () =>
      import(/* webpackPrefetch: true */ "./../views/Education.vue"),
    name: "education",
    path: EDUCATION_PATH
  },
  {
    component: () =>
      import(/* webpackPrefetch: true */ "./../views/Contact.vue"),
    name: "contact",
    path: CONTACT_PATH
  }
];
