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
      meta: {
        title: "JSComputers - Home",
      },
    },
    {
      path: "/catalog/",
      name: "catalog",
      component: CatalogView,
      meta: {
        title: "JSComputers - Catalog",
      },
      children: [
        {
          path: "/catalog/view/:id",
          name: "catalogview",
          props: true,
          component: CatalogView,
          meta: {
            title: "JSComputers - Catalog",
          },
        },
      ],
    },
    {
      path: "/cart/",
      name: "cart",
      meta: {
        title: "JSComputers - Cart",
      },
      component: () => import("../views/CartView.vue"),
    },
    {
      path: "/faq/",
      name: "faq",
      meta: {
        title: "JSComputers - FAQ",
      },
      component: () => import("../views/FaqView.vue"),
    },
    {
      path: "/about/",
      name: "about",
      meta: {
        title: "JSComputers - About",
      },
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
