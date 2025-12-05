import { createApp, h } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import '@/assets/styles/base.css'
import '@/assets/styles/variables.css'

const app = createApp({
  render: () => h(App)
})

const pinia = createPinia()
app.use(router)
app.use(pinia)
app.mount('#app')
