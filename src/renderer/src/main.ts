import { createApp } from 'vue'
import App from '@renderer/App.vue'
import router from '@renderer/router'
import pinia from '@renderer/store'
import request from '@renderer/util/request'

//建立一个vue3app
const app = createApp(App)
  .use(router)
  .use(pinia)

//将这个vue3app全局挂载到#app元素上
app.mount('#app')

//配置axios的全局引用
app.config.globalProperties.$axios = request
