import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import "./registerServiceWorker.js";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

import "bootstrap/dist/js/bootstrap.bundle.js";
import "./assets/css/bootstrap.css";
