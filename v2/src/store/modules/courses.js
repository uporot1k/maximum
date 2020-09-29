import * as CourseService from '../../services/courses';
import { SET_COURSES } from '../mutations-types';

export default {
  namespaced: true,
  state: {
    items: [],
  },
  mutations: {
    [SET_COURSES](state, payload) {
      state.items = payload;
    },
  },
  actions: {
    async fetchCoursesList({ commit }) {
      const res = await CourseService.fetchList();
      commit('SET_COURSES', res.data);
    },
  },
};
