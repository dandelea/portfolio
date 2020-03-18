import Vue from 'vue'
import App from './App.vue'
import router from './router'
import moment from 'moment'
import VueSmoothScroll from 'vue-smooth-scroll'
import VueMeta from 'vue-meta'
 
Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true
})

Vue.config.productionTip = false

Vue.filter('date', function (value) {
  if (!value) return ''
  value = value.toString()
  let date = moment(value)
  if (date.isValid()) {
    return date.format('DD/MM/YYYY')
  }
  return value
})

Vue.use(VueSmoothScroll)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
