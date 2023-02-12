import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/register",
    name: "register",
    meta: { layout: "empty" },
    component: () => import("@/views/RegisterView.vue"),
  },
  {
    path: "/login",
    name: "login",
    meta: { layout: "empty" },
    component: () => import("@/views/LoginView.vue"),
  },
  {
    path: "/",
    name: "home",
    meta: { layout: "main" },
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/categories",
    name: "categories",
    meta: { layout: "main" },
    component: () => import("@/views/CategoriesView.vue"),
  },
  {
    path: "/detail",
    name: "detail",
    meta: { layout: "main" },
    component: () => import("@/views/DetailRecordView.vue"),
  },
  {
    path: "/history",
    name: "history",
    meta: { layout: "main" },
    component: () => import("@/views/HistoryView.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    meta: { layout: "main" },
    component: () => import("@/views/ProfileView.vue"),
  },
  {
    path: "/planning",
    name: "planning",
    meta: { layout: "main" },
    component: () => import("@/views/PlanningView.vue"),
  },
  {
    path: "/record",
    name: "record",
    meta: { layout: "main" },
    component: () => import("@/views/RecordView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
