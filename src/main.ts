import { createApp } from 'vue'
import App from './App.vue'

import '@fortawesome/fontawesome-free/js/all'
import roteador from './router'
import { key, store } from './store'

createApp(App)
    .use(roteador)
    .use(store, key)
    .mount('#app')
