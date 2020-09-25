import { createApp } from 'vue'
import { createStore } from 'vuex'

import store from './store'

import App from './App.vue'
import './index.css'

const app = createApp(App)

app.use(store)

app.mount('#app')

