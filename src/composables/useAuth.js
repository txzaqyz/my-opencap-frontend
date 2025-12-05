import { computed } from 'vue'
import { useUserStore } from '@/store/modules/user'
// import { login as apiLogin } from '@/services/authService'

export function useAuth() {
  const userStore = useUserStore()

  const isLoggedIn = computed(() => userStore.isLoggedIn)
  const userInfo = computed(() => userStore.info)

  const login = async (payload) => {
    console.log('模拟登录中', payload)
    // const res = await apiLogin(payload)
    // userStore.setToken(res.token)
    // userStore.setUserInfo(res.user)
    userStore.setToken('demo-token')
    userStore.setUserInfo({ email: payload.email })
  }

  const logout = () => {
    userStore.logout()
  }

  return {
    isLoggedIn,
    userInfo,
    login,
    logout
  }
}
