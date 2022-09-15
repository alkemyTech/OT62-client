const axios = require('axios');

const token = sessionStorage.getItem('token')

// request interceptor
axios.interceptors.request.use(
    function (config) {
      config.headers.Authorization = `Bearer ${token}`;
      config.baseURL = 'http://localhost:3000';
  
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  
export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    patch: axios.patch
  };