import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";
import { routes } from "./routes";
import {store} from "./store/store";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to){
    if(to.hash){
      return { 
        selector: to.hash,
        behavior:'smooth'
      };
    }
  }
});

new Vue({
  store,
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
