export default [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/home/HomePage.vue'),
    meta: { layout: 'public', title: '首页' }
  },
  {
    path: '/features',
    name: 'Features',
    component: () => import('@/pages/home/FeaturesPage.vue'),
    meta: { layout: 'public', title: '功能介绍' }
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: () => import('@/pages/home/PricingPage.vue'),
    meta: { layout: 'public', title: '定价' }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/auth/LoginPage.vue'),
    meta: { layout: 'public', title: '登录' }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('@/pages/auth/SignupPage.vue'),
    meta: { layout: 'public', title: '注册' }
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    component: () => import('@/pages/auth/ResetPasswordPage.vue'),
    meta: { layout: 'public', title: '找回密码' }
  }
]
