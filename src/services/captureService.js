import http from './http'

export function uploadVideo(file) {
  const formData = new FormData()
  formData.append('file', file)

  return http.post('/capture/upload', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  })
}

export function startProcessing(payload) {
  return http.post('/capture/process', payload)
}

export function getProcessingStatus(taskId) {
  return http.get(`/capture/status/${taskId}`)
}
