import http from './http'

export function downloadResult(sessionId) {
  return http.get(`/sessions/${sessionId}/download`, {
    responseType: 'blob'
  })
}
