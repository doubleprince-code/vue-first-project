// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'

import '@/assets/css/main.css'

//import fontawesome
/*import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
*/

//library.add(faUserSecret)

//import router
import VueRouter from 'vue-router'
Vue.use(VueRouter)


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
Vue.use(BootstrapVue);

//mobile responsiviness configure
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)

//import fontawesome icons
import "font-awesome/css/font-awesome.min.css";
 
//defined as global component
//Vue.component('VueFontawesome', require('vue-fontawesome-icon/VueFontawesome.vue').default);
//Vue.component('font-awesome-icon', FontAwesomeIcon)

import Home from './components/index/index'
import About from './components/pages/about'
import Contact from './components/pages/contact'
import Teaching from './components/pages/teaching'
import Resources from './components/pages/resource'
import Apologetics from './components/pages/apologetics'
import Reading from './components/pages/reading'
import Music from './components/pages/music'
import Article from './components/pages/article'
import Testimony from './components/pages/events/testimony'
import Help from './components/pages/events/help'
import Accept from './components/pages/events/accept'
import Events from './components/pages/events/event'
import talk from './components/pages/talk'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
  
        {
            path: '/about',
            name: 'about',
            component: About
        },
        
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        },
  
        {
            path: '/teaching',
            name: 'teaching',
            component: Teaching
        },
  
        {
            path: '/resource',
            name: 'resource',
            component: Resources
        },
  
        {
            path: '/apologetics',
            name: 'apologetics',
            component: Apologetics
        },
  
        {
            path: '/reading',
            name: 'reading',
            component: Reading
        },
  
        {
            path: '/music',
            name: 'music',
            component: Music
        },
  
        {
            path: '/article',
            name: 'article',
            component: Article
        },
  
        {
            path: '/testimony',
            name: 'testimony',
            component: Testimony
        },
  
        {
            path: '/help',
            name: 'help',
            component: Help
        },
  
        {
            path: '/accept',
            name: 'accept',
            component: Accept
        },
  
        {
            path: '/event',
            name: 'event',
            component: Events
        },
        {
            path: '/talk',
            name: 'event',
            component: talk
        }
    ],
});



//Vue.config.productionTip = false

//Vue.component('app-init', require('./components/AppInit.vue').default)

const app = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  vuetify: new Vuetify(),
});

/*new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  vuetify: new Vuetify()
})*/
