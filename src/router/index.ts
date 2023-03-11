import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import storage from '@/utls/storage'
import { ElMessage } from 'element-plus'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/main',
    component: () => import('@/views/main/main.vue')
  },
  {
    path: '/login',
    component: () => import('@/views/login/login.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

// 进行路由拦截
router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // from 代表从哪个路径跳转而来
  // next 是一个函数， 表示放行   ①next()放行   ②next('/login')强制跳转
  // 获取token的值
  let token = storage.getStorage('tokens')
  // 判断是否去登录页
  if (to.path == '/login') {
    if (token != null) {
      return next('/')
    }
    return next()
  }
  if (!token) return next('/login')

  // 判断token是否过期
  const tokenTime = storage.getStorage('token-time')
  const timeOver = 0.5 * 24 * 3600 * 1000
  const date = new Date().getTime()
  if (date - tokenTime > timeOver) {
    // 过期了
    token = null
  }
  if (!token) {
    // 提示登录过期,请重新登录
    ElMessage.error('登录过期,请重新登录!')
    return next('/login')
  } else if (to.path == '/login') {
    return next('/')
  }
  next() // 直接放行
})
export default router
