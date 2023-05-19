import { createRouter, createWebHistory } from "vue-router";
import RegionView from "../views/RegionView.vue";
import SelectRegionView from "../views/SelectRegionView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: SelectRegionView,
    },
    {
      path: "/region",
      name: "region",
      component: RegionView,
    },
  ],
});

export default router;
