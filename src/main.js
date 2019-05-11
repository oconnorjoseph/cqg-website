import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import "./registerServiceWorker";

Vue.config.productionTip = false;

import "bootstrap/dist/js/bootstrap.bundle.js";
import "./assets/css/bootstrap.css";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
