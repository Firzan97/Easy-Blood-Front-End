import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import store from './store/store'
import vuetify from './plugins/vuetify';
import router from "./router/index"

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.use(BootstrapVue)
    // Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
new Vue({
    vuetify,
    store,
    router,
    render: h => h(App),
}).$mount('#app')