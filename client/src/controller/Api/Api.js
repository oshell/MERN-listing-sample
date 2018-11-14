import axios from 'axios';

export default class api {
  static fetchRestaurants(port = '') {
    const url = '/api/restaurants' + port;
    const request = axios.get(url);
    return request;
  }
}
