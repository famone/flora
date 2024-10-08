import { createRouter, createWebHistory, RouteRecordRaw, RouterScrollBehavior } from 'vue-router';
import Home from '@/views/Home.vue';
// import MainCategories from '@/views/shop/MainCategories.vue'
// import Category from '@/views/shop/Category.vue'
// import Subcategory from '@/views/shop/Subcategory.vue'
import { useCartTotals } from '@/helpers/useCart';

const scrollBehavior: RouterScrollBehavior = (to, _from, savedPosition) => {
  if (to.hash) {
    return { el: to.hash };
  }
  if (savedPosition) {
    return savedPosition;
  }
  return { left: 0, top: 0 };
};

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/product/:id',
    name: 'product',
    component: () => import('@/views/shop/Product.vue'),
    props: true,
  },
  {
    path: '/product-category',
    component: () => import('@/views/shop/MainCatalog.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/shop/MainCategories.vue'),
      },
      {
        path: ':cat',
        name: 'category',
        component: () => import('@/views/shop/Category.vue'),
        props: true,
      },
      {
        path: ':cat/:sub',
        name: 'subcategory',
        component: () => import('@/views/shop/Subcategory.vue'),
        props: true,
      },
    ]
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('@/views/cart/Main.vue'),
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import('@/views/cart/Checkout.vue'),
    beforeEnter: (_to, _from, next) => {
      const { leftToOrder } = useCartTotals();
      if (leftToOrder.value === 0) {
        return next();
      } else {
        return next('/cart');
      }
    },
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
];

const router = createRouter({
  history: createWebHistory('/flora/'),
  routes,
  scrollBehavior
});

export default router;