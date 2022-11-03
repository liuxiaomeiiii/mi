import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import uView from 'uview-ui'
import threeAdv from './components/three-adv.vue'
import card from './components/common/card.vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({ ...App })

Vue.component('three-adv', threeAdv)
Vue.component('card', card)
Vue.use(uView)
// uni.$u.config.unit = 'rpx'
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'

export function createApp() {
  const app = createSSRApp(App)
  return { app }
}
// #endif
