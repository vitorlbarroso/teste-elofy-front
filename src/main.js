import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;

const app = createApp(App);
app.use(router)
app.use(axios)
app.config.globalProperties.$axios = axios
app.use(VueAxios, axios)
app.mount('#app');