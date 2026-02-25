//main.js初始化
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { imgLazyPlugin } from '@/directives/index'
import { componentsPlugin } from '@/components/index'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

//引入初始化项目文件
import '@/styles/common.scss'

import App from './App.vue'
import router from './router'

const pinia = createPinia()
const app = createApp(App)
pinia.use(piniaPluginPersistedstate)
//引入图片懒加载
app.use(imgLazyPlugin)
//引入pinia
app.use(pinia)
//引入路由
app.use(router)
//引用全局通用组件
app.use(componentsPlugin)

app.mount('#app')
