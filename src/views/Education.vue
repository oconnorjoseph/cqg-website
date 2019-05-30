<template>
  <div :id="this.$options.name">
    <div class="row m-2">
      <div class="mx-auto text-center m-5">
        <h1 class="scale-display-4">CQG Academy</h1>
        <p>
          We provide our members with an extensive collection of resources and
          initiatives to develop their skills and understanding of quantitative
          finance.
        </p>
      </div>
    </div>
    <education-initiatives />
    <div class="row m-2">
      <h1 class="mx-auto text-center m-5">Meet The Education Team</h1>
    </div>
    <member-board :group="2" />
  </div>
</template>

<script>
export default {
  name: "Education",
  components: {
    EducationInitiatives: () =>
      import(/* webpackPreload: true */ "../components/EducationInitiatives.vue"),
    MemberBoard: () =>
      import(/* webpackPreload: true */ "../components/MemberBoard.vue")
  }
};
</script>
