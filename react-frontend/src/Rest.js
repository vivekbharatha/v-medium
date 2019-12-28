import axios from 'axios';

const API_ROOT = 'https://conduit.productionready.io/api';

const requests = {
  get: url => axios.get(`${API_ROOT}${url}`)
};

const Articles = {
  all: page => requests.get('/articles?limit=10')
};

export default {
  Articles
};