import "./bootstrap";
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex';
import App from './App'

// router setup
import routes from './routes/routes'

// Plugins
import GlobalComponents from './globalComponents'
import GlobalDirectives from './globalDirectives'
import Notifications from './components/NotificationPlugin'

// MaterialDashboard plugin
import MaterialDashboard from './material-dashboard'

import Chartist from 'chartist'
import StoreData from './store';
import { initialize } from './helpers/general';



Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(MaterialDashboard)
Vue.use(GlobalComponents)
Vue.use(GlobalDirectives)
Vue.use(Notifications)

/* store.js iig oruulj ireed StoreData var bolgon Vuex Store dotor hiij
 Global bolgoj bna tuuniigee store const buyu uurchluggduggui var bolgoj baina*/
const store = new Vuex.Store(StoreData);

// configure router
const router = new VueRouter({
  routes, 
  mode: 'history',
  linkExactActiveClass: 'nav-item active'
})


// global library setup
Object.defineProperty(Vue.prototype, '$Chartist', {
  get () {
    return this.$root.Chartist
  }
})

initialize(store, router);


/* index.php giin app id luu router bolon data store iig renderlej bna */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  data: {
    Chartist: Chartist
  }
})
