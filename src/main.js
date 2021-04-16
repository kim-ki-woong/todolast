import Vue from 'vue'
import { store } from './store/index.js'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VModal from "vue-js-modal";

library.add(fas)
library.add(far)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VModal, { dynamic: true})

Vue.config.productionTip = false


new Vue({
  el: '#app',
  store, vuetify,
  render: h => h(App)
})