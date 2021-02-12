import Vue from 'vue'
import App from './App.vue'

import './index.css'
Vue.config.productionTip = false
import SimpleButton from "./components/SimpleButton"
Vue.component("simple-button", SimpleButton)
import VueMeta from 'vue-meta'
Vue.use(VueMeta)
import SectionTitle from "./components/SectionTitle"
Vue.component("section-title", SectionTitle)
new Vue({
  render: h => h(App),
}).$mount('#app')