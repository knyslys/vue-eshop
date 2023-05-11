import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CatalogView from "../views/CatalogView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/catalog/",
      name: "catalog",
      component: CatalogView,

      children: [
        {
          path: "/catalog/view/:id",
          name: "catalogview",
          props: true,
          component: CatalogView,
        },
      ],
    },
  ],
});

export default router;
