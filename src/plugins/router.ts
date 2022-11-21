import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Studio from "@/views/Studio.vue";

//declare var require: any

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/studio",
      name: "studio",
      component: Studio,
    },
  ],
});

export default router;
