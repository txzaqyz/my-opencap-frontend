import { createRouter, createWebHistory } from 'vue-router'
import publicRoutes from './routes/public'
import appRoutes from './routes/app'

const routes = [
  ...publicRoutes,
  ...appRoutes,
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/pages/error/NotFoundPage.vue'),
    meta: { layout: 'public', title: '404 Not Found' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 简单的登录守卫示例，真实项目中可以从 pinia 中读取登录状态
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    // 这里简单示例：假设没有登录信息，直接跳到 login
    // 可以根据实际逻辑替换
    const isLoggedIn = false
    if (!isLoggedIn) {
      return next({ name: 'Login', query: { redirect: to.fullPath } })
    }
  }
  next()
})

export default router
