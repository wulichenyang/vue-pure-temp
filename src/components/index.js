import Vue from 'vue';
// import VueHighcharts from 'vue-highcharts';
// import CustomHighcharts from 'charts/default/CustomHighcharts.js';

import router from 'components/routes.js';
import store from 'store';

import ElementUI from 'element-ui';
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css'

import 'element-ui/lib/theme-default/index.css'

// Vue.use(VueHighcharts, CustomHighcharts);
Vue.use(ElementUI);
Vue.use(MuseUI);

export default new Vue({
  router,
  store,
  template: `
    <div class="wrapper">
      <router-view name="header"></router-view>
      <router-view name="content"></router-view>
    </div>
  `
});
