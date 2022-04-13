import { createApp } from 'vue'
import App from './src/views/App.vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


const app = createApp(App)
app.mount('#app')
app.use(createPinia())
app.use(piniaPluginPersistedstate)