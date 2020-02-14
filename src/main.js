import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import TopNav from "./components/TopNav/index";
import "./assets/font/font.css";
import "./assets/style/reset.css";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false;

Vue.use(TopNav);

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
