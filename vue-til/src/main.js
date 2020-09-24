import Vue from "vue";
import App from "./App.vue";
import router from "./routes";
import store from "./store";
import { formatDate } from "./utils/filters";

// TODO remember: 전역 필터를 통해서 값들을 필터할 수 있음 여기선 데이트 값을 다 바꿈
Vue.filter("formatDate", formatDate);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
