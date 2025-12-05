import axios from 'axios'

const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  timeout: 15000
})

http.interceptors.request.use(
  (config) => {
    // TODO: 从 Pinia 中读取 token 并设置到请求头
    // const userStore = useUserStore()
    // if (userStore.token) {
    //   config.headers.Authorization = `Bearer ${userStore.token}`
    // }
    return config
  },
  (error) => Promise.reject(error)
)

http.interceptors.response.use(
  (response) => response.data,
  (error) => {
    // 在这里可以做统一错误提示 / 跳转登录等
    console.error('API 错误：', error)
    return Promise.reject(error)
  }
)

export default http
