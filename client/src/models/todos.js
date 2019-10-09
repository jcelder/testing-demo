import axios from 'axios';

const todos = {
  get: () => axios.get('/api/tasks').then(({ data }) => data),
  getOne: (id) => axios.get(`/api/tasks/${id}`).then(({ data }) => data),
  post: (task) => axios.post('/api/tasks', task).then(({ data }) => data),
  put: (id, task) => axios.put(`/api/tasks/${id}`, task).then(({ data }) => data),
  delete: (id) => axios.delete(`/api/tasks/${id}`),
};

export default todos;
