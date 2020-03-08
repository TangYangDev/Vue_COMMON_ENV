import Router from "vue-router";
//import HelloWorld from "@/components/HelloWorld";

//引入配置路由
import routes from "./routes";



export default () => {
  return new Router({
    routes,
    //mode: "history", //hash '#' history 无 #
    base: "/tysys/",
    linkActiveClass: "active-link", //router-link
    linkExactActiveClass: "exact-active-link",
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      } else {
        return { x: 0, y: 0 };
      }
    },
    //parseQuery() {},  //地址解析问题
    //stringifyQuery() {}
    fallback: true
  });
};
