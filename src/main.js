import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'

createApp(App)
    .use(router)
    .mount('#app');

window.Kakao.init(process.env.VUE_APP_KAKAO_JS);