import { http } from './http';

export const fetchList = () => http.get('/courses');
