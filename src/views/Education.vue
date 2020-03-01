<template>
  <div :id="this.$options.name">
    <div class="row m-2">
      <header class="mx-auto text-center header-width slide-in-out">
        <div class="pb-0 pt-2">
          <logo-education-svg class="logo-view" />
        </div>
        <h3 class="font-weight-light text-secondary pb-4">
          Education
        </h3>
        <h5 class="font-weight-light">
          We provide our members with an extensive collection of resources and
          initiatives to develop their skills and understanding of quantitative
          finance.
        </h5>
      </header>
    </div>
    <education-initiatives class="mt-4" />
    <div class="row m-2">
      <h1 class="mx-auto text-center scale-display-4 m-5">Education Board</h1>
    </div>
    <member-board :group="2" />
  </div>
</template>

<script>
export default {
  name: "Education",
  components: {
    LogoEducationSvg: () =>
      import(/* webpackPreload: true */ "../components/svg/LogoEducationSvg.vue"),
    EducationInitiatives: () =>
      import(/* webpackPreload: true */ "../components/EducationInitiatives.vue"),
    MemberBoard: () =>
      import(/* webpackPreload: true */ "../components/MemberBoard.vue")
  }
};
</script>
