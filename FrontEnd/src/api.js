import axios from 'axios';

const api = axios.create({
    baseURL: 'https://golang-posgre-brisanet.herokuapp.com/',
  });

export default api;