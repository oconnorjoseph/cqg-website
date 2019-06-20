<template>
  <div :id="this.$options.name" class="card text-center p-2">
    <img
      class="card-img-top rounded-circle mx-auto"
      :src="headshotUrl"
      :alt="member.name"
    />
    <div class="card-body">
      <div class="pb-2">
        <h5 class="card-title text-primary">{{ fullName }}</h5>
        <!-- <h5 class="card-title">{{ schoolYear }}</h5> -->
      </div>
      <p class="card-text">{{ role }}</p>
      <p class="card-text">{{ generatedBiography }}</p>
      <span>
        <p class="card-text">
          Email:
          <a :href="'mailto:' + member.email">{{ member.email }}</a>
        </p>
      </span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { fetchHeadshotURL } from "../util/firebase/board";

const SENIOR_STR = "Senior";
const JUNIOR_STR = "Junior";
const SOPHOMORE_STR = "Sophomore";
const FRESHMAN_STR = "Freshman";
const GRADUATE_STR = "Graduate student";
const PHD_STR = "PhD student";

const SENIORITY_MAP = {
  0: SENIOR_STR,
  1: JUNIOR_STR,
  2: SOPHOMORE_STR,
  3: FRESHMAN_STR,
  4: FRESHMAN_STR
};

export default {
  name: "MemberCard",
  props: {
    member: {
      type: Object,
      required: true
    },
    // 0 for executive, 1 for research, 2 for education
    group: {
      type: Number,
      required: true
    }
  },
  methods: {
    fetchCurrentGradYear: function() {
      const currentDate = new Date();
      const currentYear =
        parseInt(currentDate.getFullYear()) +
        currentDate.getMonth() / 12 +
        1 / 12;
      // Rounding effectively returns the current graduating class's year
      return Math.round(currentYear);
    }
  },
  data: function() {
    return {
      headshotUrl: null
    };
  },
  computed: {
    fullName: function() {
      return this.member.firstName + " " + this.member.lastName;
    },
    role: function() {
      if (this.group === 0) {
        return this.member.executiveRole;
      } else if (this.group === 1) {
        return this.member.researchRole;
      } else {
        return this.member.educationRole;
      }
    },
    schoolYear: function() {
      return this.member.school + " '" + this.shorthandYear;
    },
    shorthandYear: function() {
      return this.member.gradYear % 1000;
    },
    generatedBiography: function() {
      const employmentClause = this.member.employment
        ? " who is working at " + this.member.employment
        : "";
      const schoolClause = this.member.school
        ? " in " + this.member.school
        : "";
      const majorClause = this.member.major
        ? " studying " + this.member.major
        : "";
      return (
        this.seniority + schoolClause + majorClause + employmentClause + "."
      );
    },
    seniority: function() {
      if (this.member.isMaster) {
        return GRADUATE_STR;
      } else if (this.member.isPhD) {
        return PHD_STR;
      } else {
        const seniorityNum = this.member.gradYear - this.fetchCurrentGradYear();
        return SENIORITY_MAP[seniorityNum];
      }
    },
    ...mapState(["firebaseStorage"])
  },
  created: function() {
    fetchHeadshotURL(this.firebaseStorage, this.member.headshot).then(
      url => (this.headshotUrl = url)
    );
  }
};
</script>

<style scoped>
img {
  max-width: 50%;
  flex-shrink: 0;
}
.card {
  border: none;
}
.card-title {
  padding-inline-end: 1ex;
  display: inline;
}
</style>
