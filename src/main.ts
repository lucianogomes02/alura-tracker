import { createApp } from 'vue'
import App from './App.vue'

import '@fortawesome/fontawesome-free/js/all'
import roteador from './router'

createApp(App)
    .use(roteador)
    .mount('#app')
