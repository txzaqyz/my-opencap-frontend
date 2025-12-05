import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    token: '',
    info: null
  }),
  getters: {
    isLoggedIn: (state) => !!state.token
  },
  actions: {
    setToken(token) {
      this.token = token
    },
    setUserInfo(info) {
      this.info = info
    },
    logout() {
      this.token = ''
      this.info = null
    }
  }
})
