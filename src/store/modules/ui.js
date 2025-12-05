import { defineStore } from 'pinia'

export const useUiStore = defineStore('ui', {
  state: () => ({
    sidebarCollapsed: false,
    globalLoading: false
  }),
  actions: {
    toggleSidebar() {
      this.sidebarCollapsed = !this.sidebarCollapsed
    },
    showLoading() {
      this.globalLoading = true
    },
    hideLoading() {
      this.globalLoading = false
    }
  }
})
