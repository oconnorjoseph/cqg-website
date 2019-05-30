<template>
  <div :id="this.$options.name" class="row m-2">
    <div
      v-for="project in projects"
      :key="project.title"
      class="col-sm-6 col-lg-3 p-2"
    >
      <research-card :project="project" />
    </div>
  </div>
</template>

<script>
import {
  unsubscribeResearch,
  subscribeResearch
} from "./../util/firebase/research.js";

import { mapState } from "vuex";

export default {
  name: "ResearchProjects",
  components: {
    ResearchCard: () =>
      import(/* webpackPreload: true */ "../components/ResearchCard.vue")
  },
  data: function() {
    return {
      projects: []
    };
  },
  computed: mapState(["firestore"]),
  created: function() {
    subscribeResearch(this.firestore, this.projects);
  },
  destroyed: function() {
    unsubscribeResearch();
  }
};
</script>
