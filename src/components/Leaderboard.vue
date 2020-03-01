<template>
  <div :id="this.$options.name">
    <div class="row">
      <div class="col">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Analyst</th>
              <th>Score</th>
              <th>Entries</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="leader in leaders" :key="leader.name">
              <td>
                <div class="row">
                  <div class="col">
                    <p>{{ leader.name }}</p>
                  </div>
                </div>
              </td>
              <td>
                <div class="row">
                  <div class="col">
                    <p>{{ leader.score.toLocaleString() }}</p>
                  </div>
                </div>
              </td>
              <td>
                <div class="row">
                  <div class="col">
                    <p>{{ leader.rank.toLocaleString() }}</p>
                  </div>
                </div>
              </td>
              <td>
                <div class="row">
                  <div class="col">
                    <p>{{ leader.entriesCount.toLocaleString() }}</p>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="row py-1">
      <button
        v-if="canShowMore"
        @click="onShowMore()"
        class="btn btn-block btn-primary"
      >
        Show More
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Leaderboard",
  props: {
    /**
     * Each leader object in leaders must be of the form { name: ANALYST_NAME, score: LEADER_SCORE, rank: LEADER_RANK, entriesCount: NUM_ENTRIES }
     */
    leaders: {
      type: Array,
      required: true
    },
    canShowMore: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onShowMore: function() {
      this.$emit("show-more");
    }
  }
};
</script>

<style scoped>
/* thead {
  background-color: #df691a;
}
tr:last-child td:first-child {
  border-bottom-left-radius: 55px 5px;
}
tr:last-child td:last-child {
  border-bottom-right-radius: 25px 225px;
}
td > .row {
  margin-top: -15px;
  margin-bottom: -15px;
}
td > .row > .leader-img {
  height: 42px;
  width: 42px;
  margin-left: 15px;
  margin-top: 12px;
  margin-bottom: 12px;
}
td > .row > div > p {
  padding-top: 21px;
} */
</style>
