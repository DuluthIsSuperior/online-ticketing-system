import axios from 'axios';

class LoginService {
  login(data) {
    return axios.post(`http://localhost:8080/login`, data);
  }

  kick() {
    return axios.get(`http://localhost:8080/kick`);
  }

  userLoggedIn() {
    return axios.post(`http://localhost:8080/currentlyLoggedIn`);
  }
};

export default new LoginService();