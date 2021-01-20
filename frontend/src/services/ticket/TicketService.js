import axios from 'axios';

class TicketService {
  getTickets() {
    return axios.post(`http://localhost:8080/tickets/getCurrentTickets`);
  }

  addTicket(ticket) {
    return axios.post(`http://localhost:8080/tickets/addTicket`, ticket);
  }
};

export default new TicketService();