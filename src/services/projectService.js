import http from './http'

export function getProjects() {
  return http.get('/projects')
}

export function getProjectDetail(projectId) {
  return http.get(`/projects/${projectId}`)
}

export function createProject(payload) {
  return http.post('/projects', payload)
}
