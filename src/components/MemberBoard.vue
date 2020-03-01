<template>
  <div :id="this.$options.name" class="row m-2">
    <div
      v-for="member in board"
      :key="member.uni"
      class="p-2 mx-auto"
      style="max-width: 300px;"
    >
      <member-card :member="member" :group="group" />
    </div>
  </div>
</template>

<script>
import {
  BOARD_GROUPS,
  subscribeBoard,
  unsubscribeBoard
} from "./../util/firebase/board.js";
import { mapState } from "vuex";

export default {
  name: "MemberBoard",
  props: {
    // 0 for executive, 1 for research, 2 for education
    group: {
      type: Number,
      required: true
    }
  },
  components: {
    MemberCard: () => import(/* webpackPreload: true */ "./MemberCard.vue")
  },
  data: function() {
    return {
      board: []
    };
  },
  computed: mapState(["firestore"]),
  created: function() {
    subscribeBoard(this.firestore, BOARD_GROUPS[this.group], this.board);
  },
  destroyed: function() {
    unsubscribeBoard(BOARD_GROUPS[this.group]);
  }
};
</script>

<style></style>
