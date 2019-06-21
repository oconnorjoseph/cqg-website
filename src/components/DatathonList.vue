<template>
  <div :id="this.$options.name" class="row m-2">
    <div
      v-for="datathon in datathons"
      :key="datathon.title"
      class="col-sm-12 p-2"
    >
      <datathon-card :datathon="datathon" />
    </div>
  </div>
</template>

<script>
import {
  unsubscribeDatathons,
  subscribeDatathons
} from "./../util/firebase/datathon.js";

import { mapState } from "vuex";

export default {
  name: "DatathonList",
  components: {
    DatathonCard: () =>
      import(/* webpackPreload: true */ "../components/DatathonCard.vue")
  },
  data: function() {
    return {
      datathons: []
    };
  },
  computed: mapState(["firestore"]),
  created: function() {
    subscribeDatathons(this.firestore, this.datathons);
  },
  destroyed: function() {
    unsubscribeDatathons();
  }
};
</script>
