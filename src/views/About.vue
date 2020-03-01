<template>
  <div :id="this.$options.name">
    <div class="row mx-2 mb-4">
      <header class="mx-auto text-center slide-in-out">
        <div class="pb-2">
          <logo-svg class="logo-view" />
        </div>
        <h5 class="font-weight-light">
          We strive to facilitate a community of quantitative thinking.
        </h5>
      </header>
    </div>
    <div class="row m-2">
      <header class="mx-auto text-center m-4 header-width">
        <div class="pb-2">
          <h1 class="scale-display-4">Who We Are</h1>
        </div>
        <custom-bullet>
          <template #bullet="{ colorHoverable }">
            <rocket-svg :color="colorHoverable" />
          </template>
          <template #default>
            Columbia Quant Group (CQG) is Columbia's first and only Quantitative
            Finance organization.
          </template>
        </custom-bullet>
        <custom-bullet>
          <template #bullet="{ colorHoverable }">
            <puzzle-svg :color="colorHoverable" />
          </template>
          <template #default>
            We aim to ignite students' creativity and problem-solving skills by
            connecting them with real-world professionals and introducing them
            to modern quantitative analysis.
          </template>
        </custom-bullet>
        <custom-bullet>
          <template #bullet="{ colorHoverable }">
            <crowd-svg :color="colorHoverable" />
          </template>
          <template #default>
            Membership is open for all Columbia University Students. We
            currently have more than 250 members across Columbia's undergraduate
            and graduate schools.
          </template>
        </custom-bullet>
      </header>
    </div>
    <div class="row m-2">
      <header class="mx-auto text-center m-4">
        <div class="pb-2">
          <h1 class="scale-display-4">Executive Board</h1>
        </div>
        <!-- <h5 class="font-weight-light">
          We strive to facilitate a community of quantitative thinking.
        </h5> -->
      </header>
    </div>
    <member-board :group="0" />
  </div>
</template>

<script>
export default {
  name: "About",
  components: {
    MemberBoard: () =>
      import(/* webpackPreload: true */ "../components/MemberBoard.vue"),
    CustomBullet: () =>
      import(/* webpackPreload: true */ "../components/CustomBullet.vue"),
    LogoSvg: () =>
      import(/* webpackPreload: true */ "../components/svg/LogoSvg.vue"),
    RocketSvg: () =>
      import(/* webpackPreload: true */ "../components/svg/RocketSvg.vue"),
    PuzzleSvg: () =>
      import(/* webpackPreload: true */ "../components/svg/PuzzleSvg.vue"),
    CrowdSvg: () =>
      import(/* webpackPreload: true */ "../components/svg/CrowdSvg.vue")
  }
};
</script>
