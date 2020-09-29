import * as LessonsService from '@/services/lessons';
import { SET_LESSONS_LIST } from '../mutations-types';

export default {
  namespaced: true,
  state: {
    items: [],
  },
  mutations: {
    [SET_LESSONS_LIST](state, payload) {
      state.items = payload;
    },
  },
  actions: {
    async fetchLessonsList({ commit }) {
      const res = await LessonsService.fetchList();
      commit('SET_LESSONS_LIST', res.data);
    },
  },
  getters: {
    getLessonInfoById: (state) => (id) => state.items.find((lesson) => +lesson.id === +id),
    filteredLessons: (state, _, rootState) => state.items.filter((lesson) => lesson.courseId === rootState.Courses.pickedCourse),
  },
};
