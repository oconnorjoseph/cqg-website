<template>
  <div :id="this.$options.name">
    <datathon-list />
  </div>
</template>

<script>
export default {
  name: "Datathons",
  components: {
    DatathonList: () =>
      import(/* webpackPreload: true */ "../components/DatathonList.vue")
  }
};
</script>
