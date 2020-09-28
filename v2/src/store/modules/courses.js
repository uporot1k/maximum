import * as CourseService from '../../services/courses';

export default {
  namespaced: true,
  state: {
    items: [],
  },
  actions: {
    async fetchCoursesList({ commit }) {
      console.log(CourseService);
      const res = await CourseService.fetchList();
      debugger;
      commit('SET_COURSES', res);
    },
  },
};
