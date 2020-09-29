import * as CourseService from '../../services/courses';
import { SET_COURSES, SET_PICKED_COURSE } from '../mutations-types';

export default {
  namespaced: true,
  state: {
    items: [],
    pickedCourse: null,
  },
  mutations: {
    [SET_COURSES](state, payload) {
      state.items = payload;
    },
    [SET_PICKED_COURSE](state, id) {
      state.pickedCourse = id;
    },
  },
  actions: {
    async fetchCoursesList({ commit }) {
      const res = await CourseService.fetchList();

      commit('SET_COURSES', res.data);
      commit('SET_PICKED_COURSE', res.data[0]?.id);
    },
    pickCourse({ commit }, id) {
      commit('SET_PICKED_COURSE', id);
    },
  },
  getters: {
    getCourseInfoById: (state) => (courseId) => state.items.filter((course) => courseId === course.id)[0],
  },
};
