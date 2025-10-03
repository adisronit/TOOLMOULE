import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'admin-lte/dist/css/adminlte.min.css'
import 'admin-lte/dist/js/adminlte.min.js'
import './assets/main.css'
import '@fortawesome/fontawesome-free/css/all.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
