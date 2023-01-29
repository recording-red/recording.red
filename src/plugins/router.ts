import { createRouter, createWebHistory } from "vue-router";
import ChannelView from "@/views/ChannelView.vue" 
import HomeView from "@/views/HomeView.vue";
import NewVideoView from "@/views/NewVideoView.vue";
import StudioView from "@/views/StudioView.vue";

//declare var require: any

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/studio",
      name: "studio",
      component: StudioView,
    },
    {
      path: "/video/new",
      name: "new video",
      component: NewVideoView,
    },
    {
      path: "/channel",
      name: "channel",
      component: ChannelView,
    },
  ],
});

export default router;
