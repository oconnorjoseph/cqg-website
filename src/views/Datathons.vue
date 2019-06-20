<template>
  <div :id="this.$options.name">
    <div class="row m-2">
      <div class="mx-auto text-center m-5">
        <h1>Upcoming Datathons</h1>
        <p>
          Our research team is working on several projects at the forefront of
          computer science in finance.
        </p>
      </div>
    </div>
    <research-projects />
    <div class="row m-2">
      <h1 class="mx-auto text-center m-5">Meet Our Research Team</h1>
    </div>
    <member-board :group="1" />
  </div>
</template>

<script>
export default {
  name: "Research",
  components: {
    ResearchProjects: () =>
      import(/* webpackPreload: true */ "../components/ResearchProjects.vue"),
    MemberBoard: () =>
      import(/* webpackPreload: true */ "../components/MemberBoard.vue")
  }
};
</script>
