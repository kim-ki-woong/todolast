import Vue from 'vue'
import Vuex from 'vuex'

import todoStore from './modules/todoStore.js'

Vue.use(Vuex)


export const store = new Vuex.Store({
    modules: {
        todoStore,
    }
})