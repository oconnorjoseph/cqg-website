<template>
  <div :id="this.$options.name">
    <div class="row m-2">
      <header class="mx-auto text-center m-4">
        <div class="pb-2">
          <h1 class="scale-display-4">Executive Board</h1>
        </div>
        <h5 class="font-weight-light">
          We strive to facilitate a community of quantitative thinking.
        </h5>
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
      import(/* webpackPreload: true */ "../components/MemberBoard.vue")
  }
};
</script>
