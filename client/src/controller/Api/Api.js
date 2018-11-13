import axios from 'axios';

export default class api {
  static fetchRestaurants() {
    const url = '/api/restaurants';
    const request = axios.get(url);
    return request;
  }
}
