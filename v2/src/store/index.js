import Vue from 'vue';
import Vuex from 'vuex';

import Lessons from './modules/lessons';
import Courses from './modules/courses';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Lessons,
    Courses,
  },
});
