<template>
  <div :id="this.$options.name" class="row m-2">
    <div
      v-for="initiative in initiatives"
      :key="initiative.title"
      class="col-sm-6 col-lg-6 p-2"
    >
      <education-card :initiative="initiative" />
    </div>
  </div>
</template>

<script>
import {
  unsubscribeEducation,
  subscribeEducation
} from "./../util/firebase/education.js";

import { mapState } from "vuex";

export default {
  name: "EducationInitiatives",
  components: {
    EducationCard: () =>
      import(/* webpackPreload: true */ "../components/EducationCard.vue")
  },
  data: function() {
    return {
      initiatives: []
    };
  },
  computed: mapState(["firestore"]),
  created: function() {
    subscribeEducation(this.firestore, this.initiatives);
  },
  destroyed: function() {
    unsubscribeEducation();
  }
};
</script>
