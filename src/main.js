import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueProgressBar from 'vue-progressbar'

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.min.css'

Vue.config.productionTip = false

const options = {
    color: '#bffaf3',
    failedColor: '#eb2832',
    thickness: '5px'
};

Vue.use(VueProgressBar, options);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
