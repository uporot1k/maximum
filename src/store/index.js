import { createStore } from 'vuex'

import courses from './modules/courses'
import lessons from './modules/lessons'

const store = createStore({
  modules: {
    courses,
    lessons
  }
});

export default store;