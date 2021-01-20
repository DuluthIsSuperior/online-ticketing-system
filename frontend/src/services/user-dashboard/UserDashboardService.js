import axios from 'axios';

class UserDashboardService {
  getTickets() {
    return axios.post(`http://localhost:8080/UserDashboard/getCurrentTickets`);
  }
};

export default new UserDashboardService();