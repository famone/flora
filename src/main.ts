import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '../src/assets/main.css'
import App from './App.vue'
import router from '@/router/index'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import VueLazyLoad from 'vue3-lazyload'

import imgUrl from "@/assets/img/preloadimg.svg";

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(VueLazyLoad, {
    loading: imgUrl,
    error: imgUrl,
})

app.use(pinia)
app.use(router)
app.mount('#app')

