import Home from "../../views/pages/Home.vue";
//import Login from "../../viewers/Login/Login.vue";

export default [
  {
    path: "/",
    redirect: "/app" //添加默认路由
  },
  {
    path: "/app",
    name: "home",
    component: Home,
    meta: {
      title: "home page",
      description: "ty"
    },
    beforeEnter: (to, from, next) => {
      console.log(`before Enter invoked`);
      next();
    }
  },
  {
    path: "/login",
    name: "login",
    component: () => import('../../views/Login/Login.vue')
  }
];
