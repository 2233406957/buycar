import Vue from "vue"

import vuex from "vuex"

import buycar from "./buycar"

Vue.use(vuex)

const store = new vuex.Store({
    modules:{
        buycar
    }
})

export default store