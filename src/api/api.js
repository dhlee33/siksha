import request from './request';

const API_URL = 'http://siksha.kr:8230'

const createAPI = (customURL, headers, config = { httpMethods: [] }) => {
  const baseURL = customURL || API_URL;

  const api = {};
  const httpMethods = config.httpMethods && config.httpMethods.length > 0 ? config.httpMethods : ['GET', 'POST', 'PUT', 'DELETE'];

  httpMethods.forEach((method) => {
    api[method.toLowerCase()] = (endpoint, body, options) =>
      request(` ${baseURL}${endpoint}`, { method, body, headers, ...options });
  });

  return api;
};

const api = createAPI(null, { 'Content-Type': 'application/json' });

export default {
  getMenu: () => api.get('/rate/view?date=today'),
  rate:(body)=>api.post('/rate',body)
};
