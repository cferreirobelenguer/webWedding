
import { createApp } from 'vue'
import App from './App.vue'
//Boostrap 5
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
// importing AOS css style globally
import 'aos/dist/aos.css'


import AOS from 'aos'
AOS.init()



createApp(App).mount('#app')
