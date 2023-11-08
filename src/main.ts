import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '../src/assets/main.css'
import App from './App.vue'
import router from '@/router/index'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.mount('#app')

