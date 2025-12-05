import { defineStore } from 'pinia'

export const useSessionStore = defineStore('session', {
  state: () => ({
    sessions: [],
    currentSessionId: null
  }),
  actions: {
    setSessions(list) {
      this.sessions = list
    },
    setCurrentSession(id) {
      this.currentSessionId = id
    }
  }
})
