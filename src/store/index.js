import { createPinia } from 'pinia'

export function setupStore(app) {
  const pinia = createPinia()
  app.use(pinia)
}

export * from './modules/user'
export * from './modules/project'
export * from './modules/session'
export * from './modules/ui'
