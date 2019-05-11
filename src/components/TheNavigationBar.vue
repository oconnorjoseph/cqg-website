<template>
  <nav
    :id="this.$options.name"
    class="navbar fixed-top navbar-expand-sm navbar-light bg-light py-1"
  >
    <!-- Link to Home 'page' -->
    <router-link class="navbar-brand" :to="homePath">
      <logo-svg width="150" color="000" />
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <!-- Link to About 'page' -->
        <li class="nav-item">
          <router-link class="nav-link" :to="aboutPath">Our Team</router-link>
        </li>
        <!-- Link to Events 'page' -->
        <li class="nav-item">
          <a
            class="nav-link"
            href="https://www.facebook.com/pg/columbiaquantgroup/events/?ref=page_internal"
            >Events</a
          >
        </li>
        <!-- Link to Research 'page' -->
        <li class="nav-item">
          <router-link class="nav-link" :to="researchPath"
            >Research</router-link
          >
        </li>
        <!-- Link to Education 'page' -->
        <li class="nav-item">
          <router-link class="nav-link" :to="educationPath"
            >Education</router-link
          >
        </li>
        <!-- Link to Contact 'page' -->
        <li class="nav-item">
          <router-link class="nav-link" :to="contactPath">Contact</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import {
  HOME_PATH,
  ABOUT_PATH,
  EVENTS_PATH,
  RESEARCH_PATH,
  EDUCATION_PATH,
  CONTACT_PATH
} from "./../router/paths.js";

export default {
  name: "TheNavigationBar",
  components: {
    LogoSvg: () => import("./LogoSvg.vue")
  },

  data: function() {
    return {
      homePath: HOME_PATH,
      aboutPath: ABOUT_PATH,
      eventsPath: EVENTS_PATH,
      researchPath: RESEARCH_PATH,
      educationPath: EDUCATION_PATH,
      contactPath: CONTACT_PATH
    };
  }
};
</script>

<style>
li {
  overflow: hidden;
  white-space: nowrap;
}
</style>
