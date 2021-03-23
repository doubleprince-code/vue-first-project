import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import VApp from 'vuetify'
import VBtn from 'vuetify'

Vue.use(Vuetify)

const opts = {
    VApp,
    VBtn
}

export default new Vuetify(opts)