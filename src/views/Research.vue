<template>
  <div :id="this.$options.name">
    <div class="row m-2">
      <header class="mx-auto text-center header-width slide-in-out">
        <div class="pb-0 pt-2">
          <logo-research-svg class="logo-view" />
        </div>
        <h3 class="font-weight-light text-secondary pb-4">
          Research
        </h3>
        <h5 class="font-weight-light">
          Any student or professor, member or non-member, is welcome to join the
          research team.
        </h5>
      </header>
    </div>
    <div class="row m-2">
      <div class="mx-auto text-center mx-5 mt-5">
        <h1 class="scale-display-4">Datathons</h1>
        <p class="header-width">
          We compete in various data science competition every semester.
        </p>
      </div>
    </div>
    <div class="row m-2" v-if="hasInternalDatathonAlert">
      <datathon-alert class="header-width mx-auto" />
    </div>
    <div class="row m-2">
      <div class="mx-auto text-center m-5">
        <h1 class="scale-display-4">Current Projects</h1>
        <p>
          Our research team is working on several projects at the forefront of
          computer science in finance.
        </p>
      </div>
    </div>
    <research-projects />
    <div class="row m-2">
      <h1 class="mx-auto text-center scale-display-4 m-5">Research Board</h1>
    </div>
    <member-board :group="1" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Research",
  components: {
    LogoResearchSvg: () =>
      import(/* webpackPreload: true */ "../components/svg/LogoResearchSvg.vue"),
    ResearchProjects: () =>
      import(/* webpackPreload: true */ "../components/ResearchProjects.vue"),
    MemberBoard: () =>
      import(/* webpackPreload: true */ "../components/MemberBoard.vue"),
    DatathonAlert: () =>
      import(/* webpackPreload: true */ "../components/DatathonAlert.vue")
  },
  computed: {
    ...mapGetters(["hasInternalDatathonAlert"])
  }
};
</script>
