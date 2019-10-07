import axios from 'axios';

const tasks = {
  get: (id) => id ? axios.get(`/api/tasks/${id}`) : axios.get('/api/tasks'),
  post: (task) => axios.post('/api/tasks', task),
  put: (id, task) => axios.put(`/api/tasks/${id}`, task),
  delete: (id) => axios.delete(`/api/tasks/${id}`),
};

export default tasks;
