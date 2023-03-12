import { createApp } from 'vue'
import App from '@renderer/App.vue'
import router from '@renderer/router'
import pinia from '@renderer/store'

createApp(App)
  .use(router)
  .use(pinia)
  .mount('#app')
