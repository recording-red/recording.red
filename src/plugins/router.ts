import { createRouter, createWebHistory } from "vue-router";
import Studio from "@/views/Studio.vue";

//declare var require: any

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/studio",
      name: "studio",
      component: Studio,
    },
  ],
});

export default router;
