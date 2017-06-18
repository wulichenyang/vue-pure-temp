import Vue from 'vue';
import Vuex from 'vuex';

import logger from 'store/plugins/logger.js';

import temp from 'store/modules/temp';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    temp,
  },
  plugins: process.env.NODE_ENV !== 'production' ? [ logger ] : []
});
