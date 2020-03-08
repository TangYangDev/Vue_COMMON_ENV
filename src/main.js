// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
//import router from './router'
import VueRouter from "vue-router";
import Vuex from "vuex";

//自定义导入文件路径
import createRouter from "./router/config/router";
import createStore from "./store/hot_store";
//import mutations from "./store/mutations/mutations";

Vue.use(VueRouter);
Vue.use(Vuex);

//每次使用，都去创建对象（解耦，便于维护）
const router = createRouter();
const store = createStore();

//router生命周期函数钩子
router.beforeEach((to, from, next) => {
  console.log("before each invoked");
  next();
});

router.beforeResolve((to, from, next) => {
  console.log("before resolve invoked");
  next();
});

router.afterEach((to, from) => {
  console.log("after each invoked");
});

//Vue.store监听
store.watch(
  state => {
    console.log("store watch 第一个参数 involved");
    return state.count + 1;
  },
  newCount => {
    console.log("store watch 第二个参数 involved:" + newCount);
  }
);

store.subscribe((mutations, state) => {
  console.log("type", mutations.type);
  console.log("payload", mutations.payload);
});

store.subscribeAction((actions, state) => {
  console.log("type", actions.type);
  console.log("payload", actions.payload);
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
