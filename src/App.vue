<template>
  <div id="app">
    <div class="container-fluid m-0">
      <div class="row">
        <div class="col p-0">
          <the-navigation-bar />
        </div>
      </div>
      <div class="content">
        <div class="row">
          <div class="col">
            <router-view />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col p-0">
          <the-footer />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {
    TheNavigationBar: () =>
      import(/* webpackPreload: true */ "./components/TheNavigationBar.vue"),
    TheFooter: () =>
      import(/* webpackPreload: true */ "./components/TheFooter.vue")
  }
};
</script>

<style>
.content {
  margin-top: 95.75px;
  margin-bottom: 68.8px;
}
</style>
