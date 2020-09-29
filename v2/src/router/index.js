import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    meta: {
      title: 'Домашняя страница',
    },
  },
  {
    path: '/lessons',
    name: 'LessonsList',
    component: () => import(/* webpackChunkName: "lessons-list" */ '../views/Lessons/List.vue'),
    meta: {
      title: 'Расписание',
    },
  },
  {
    path: '/lessons/:id',
    name: 'LessonDetail',
    component: () => import(/* webpackChunkName: "lesson-detail" */ '../views/Lessons/Detail/Index.vue'),
    children: [
      {
        path: 'tests',
        name: 'LessonDetailTests',
        component: () => import(/* webpackChunkName: "lesson-detail-tests" */ '../views/Lessons/Detail/Tests.vue'),
      },
      {
        path: 'tests',
        name: 'LessonDetailStat',
        component: () => import(/* webpackChunkName: "lesson-detail-stat" */ '../views/Lessons/Detail/Stat.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
