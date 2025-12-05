import http from './http'

export function login(payload) {
  return http.post('/auth/login', payload)
}

export function signup(payload) {
  return http.post('/auth/signup', payload)
}

export function getCurrentUser() {
  return http.get('/auth/me')
}
