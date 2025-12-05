import http from './http'

export function getSessions(projectId) {
  const params = projectId ? { projectId } : {}
  return http.get('/sessions', { params })
}

export function getSessionDetail(sessionId) {
  return http.get(`/sessions/${sessionId}`)
}

export function getSessionCurves(sessionId) {
  return http.get(`/sessions/${sessionId}/curves`)
}
