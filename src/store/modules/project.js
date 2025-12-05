import { defineStore } from 'pinia'

export const useProjectStore = defineStore('project', {
  state: () => ({
    projects: [],
    currentProjectId: null
  }),
  actions: {
    setProjects(list) {
      this.projects = list
    },
    setCurrentProject(id) {
      this.currentProjectId = id
    }
  }
})
