import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/dashboard",
    component: () => import("../views/Dashboard.vue"),
    children: [
      {
        path: "products",
        component: () => import("../views/Products.vue"),
      },
      {
        path: "orders",
        component: () => import("../views/Orders.vue"),
      },
      {
        path: "coupons",
        component: () => import("../views/Coupons.vue"),
      },
      {
        path: "productslist",
        component: () => import("../views/Productslist.vue"),
      },
    ],
  },
  {
    path: "/user",
    component: () => import("../views/Userboard.vue"),
    children: [
      {
        path: "cart",
        component: () => import("../views/UserCart.vue"),
      },
      {
        path: "userproducts",
        component: () => import("../views/UserProducts.vue"),
      },
      {
        path: "product/:productId",
        component: () => import("../views/UserProduct.vue"),
      },
      {
        path: "checkout/:orderId",
        component: () => import("../views/UserCheckout.vue"),
      },
      {
        path: "cartbill",
        component: () => import("../views/UserCartBill.vue"),
      },
      {
        path: "about",
        component: () => import("../views/About.vue"),
      },
      {
        path: "questions",
        component: () => import("../views/Questions.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: "active",
  routes,
});

export default router;
