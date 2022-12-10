import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/home-view.vue";
import SearchView from "../views/search-view.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/search",
      name: "search",
      component: SearchView,
      props: route => ({ query: route.query.q })
    },
    {
      path: "/new",
      name: "new",
      component: SearchView
    }
  ],
});

export default router;
