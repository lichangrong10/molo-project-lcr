import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/layout/layoutView.vue'


//router初始化
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('../views/home/homeView.vue'),
        },
        {
          path: 'category/:id',
          name: 'Category',
          component: () => import('../views/category/categoryView.vue'),
        },
        {
          path: 'category/sub/:id',
          name: 'SubCategory',
          component: () => import('../views/SubCategory/SubCategory.vue'),
        },
        {
          path: 'detail/:id',
          name: 'Detail',
          component: () => import('../views/Detail/DetailView.vue'),
        },
        {
          path: 'cart/',
          name: 'Cart',
          component: () => import('../views/cart/CartList.vue'),
        },
        {
          path: 'checkout/',
          name: 'CheckOut',
          component: () => import('../views/checkout/CheckOut.vue'),
        },
        {
          path: 'pay/',
          name: 'Pay',
          component: () => import('../views/pay/Pay.vue'),
        },
        {
          path: 'menber/',
          redirect: '/menber/info',
          component: () => import('../views/menber/index.vue'),
          children: [
            {
              path: 'info/',
              component: () => import('../views/menber/components/UserInfo.vue'),
            },
            {
              path: 'order/',
              component: () => import('../views/menber/components/UserOrder.vue'),
            },
          ]
        },
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/login/loginView.vue'),
    },
  ],
  scrollBehavior() {
    return {
      top: 0
    }
  }
})

export default router
