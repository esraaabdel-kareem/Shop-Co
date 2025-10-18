import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignUpView from '@/views/SignUpView.vue'
import productHomeView from "@/views/productHomeView.vue";
import productListView from "@/views/productListView.vue";
import cartHomeView from "@/views/cartHomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: '/signUp',
    name: 'signUp',
    component: SignUpView
  },
  {
    path: "/product/:id",
    name: "product",
    component: productHomeView,
  },
  {
    path: "/product-list",
    name: "productList",
    component: productListView,
  },
  {
    path: "/cart",
    name: "cart",
    component: cartHomeView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
