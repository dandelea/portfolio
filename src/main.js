import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueSmoothScroll from 'vue-smooth-scroll'

createApp(App)
    .use(router)
    .use(VueSmoothScroll)
    .mount('#app')