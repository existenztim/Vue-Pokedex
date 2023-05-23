import { createRouter, createWebHistory } from "vue-router";
import RegionView from "../views/RegionView.vue";
import SelectRegionView from "../views/SelectRegionView.vue";
import NotFound from "../views/404View.vue";
import PokemonView from "../views/PokemonView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: SelectRegionView,
    },

    {
      path: "/home",
      redirect: "/",
    },

    {
      path: "/region/:name",
      name: "region",
      component: RegionView,
    },

    {
      path: "/region/:name/:pokemon",
      name: "pokemon",
      component: PokemonView,
    },

    {
      path: "/:catchall(.*)*",
      name: "not found",
      component: NotFound,
    },
  ],
});

export default router;
