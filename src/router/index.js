import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("../components/HelloWorld.vue"),
    redirect: {
      name: "homePage",
    },
  },
  {
    path: "/home",
    name: "homePage",
    component: () => import("../pages/HomePage.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
