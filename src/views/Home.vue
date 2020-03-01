<template>
  <div :id="this.$options.name">
    <div class="row p-5 mt-5">
      <div class="col text-center">
        <h1 class="scale-display-3 title">Columbia Quant Group</h1>
      </div>
    </div>
    <div class="row">
      <div class="col text-center">
        <h5>Columbia's First Quantitative Finance Club.</h5>
      </div>
    </div>
    <fabric />
    <div class="row p-5">
      <div class="col-auto text-center mx-auto">
        <a href="https://www.facebook.com/columbiaquantgroup/"
          ><button class="rot">Attend upcoming events</button>
        </a>
      </div>
    </div>
    <div class="row p-5"></div>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {
    Fabric: () => import(/* webpackPreload: true */ "../components/Fabric.vue")
  }
};
</script>

<style>
#Fabric {
  z-index: 999;
}
.btn-outline-primary {
  background-color: #fff;
}
</style>
