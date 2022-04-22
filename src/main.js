import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import '@fortawesome/fontawesome-free/js/all'
=======
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
>>>>>>> 8abd896be4a515d5582bb2ea6033a2adc0dee72b

const app = createApp(App)

app.use(router)

app.mount('#app')
