export default [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/pages/dashboard/DashboardPage.vue'),
    meta: { layout: 'app', title: '仪表盘', requiresAuth: true }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/pages/dashboard/ProfilePage.vue'),
    meta: { layout: 'app', title: '个人中心', requiresAuth: true }
  },
  {
    path: '/projects',
    name: 'ProjectList',
    component: () => import('@/pages/project/ProjectListPage.vue'),
    meta: { layout: 'app', title: '项目列表', requiresAuth: true }
  },
  {
    path: '/projects/:projectId',
    name: 'ProjectDetail',
    component: () => import('@/pages/project/ProjectDetailPage.vue'),
    meta: { layout: 'app', title: '项目详情', requiresAuth: true }
  },
  {
    path: '/sessions',
    name: 'SessionList',
    component: () => import('@/pages/session/SessionListPage.vue'),
    meta: { layout: 'app', title: '会话列表', requiresAuth: true }
  },
  {
    path: '/sessions/:sessionId',
    name: 'SessionDetail',
    component: () => import('@/pages/session/SessionDetailPage.vue'),
    meta: { layout: 'app', title: '会话详情', requiresAuth: true }
  },
  {
    path: '/capture',
    name: 'CaptureWizard',
    component: () => import('@/pages/capture/CaptureWizardPage.vue'),
    meta: { layout: 'app', title: '采集/上传', requiresAuth: true }
  },
  {
    path: '/capture/result/:taskId',
    name: 'CaptureResult',
    component: () => import('@/pages/capture/CaptureResultPage.vue'),
    meta: { layout: 'app', title: '采集结果', requiresAuth: true }
  }
]
