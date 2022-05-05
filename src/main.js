import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/base.css'
import 'bootstrap/dist/js/bootstrap.js'
// import '@fortawesome/fontawesome-free/js/all'

const app = createApp(App)

app.use(router)

app.mount('#app')
