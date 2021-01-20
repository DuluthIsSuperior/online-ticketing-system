import React, { Component } from 'react';
import LoginService from '../../services/LoginService';
import UserDashboardService from '../../services/user-dashboard/UserDashboardService';

class UserDashboardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: null,
      header: 'Please wait',
      tickets: []
    }
    this.addTicketClicked = this.addTicketClicked.bind(this);
  }

  componentDidMount() {
    LoginService.userLoggedIn().then(response => {
        this.setState({loggedIn: response.data});
        if (!this.state.loggedIn) {  // string is false if it is empty, null, or undefined
          this.setState({ header: "You are not logged in"});
          this.props.history.push("/");
        } else {
          this.setState({header: `Welcome ${this.state.loggedIn}!`});
          UserDashboardService.getTickets().then(response => {
            this.setState({
              tickets: response.data
            })
          });
        }
      }
    );
  }

  addTicketClicked() {
    this.props.history.push("/UserDashboard/add");
  }

  render() {
    return(
      <div className="userDashboard">
        <h1>{this.state.header}</h1>
        <table className="ticketTable">
          <thead>
            <tr>
              <th>Ticket ID</th>
              <th>Issue</th>
              <th>Description</th>
              <th>Resolved</th>
              <th>Closed</th>
            </tr>
          </thead>
          <tbody>{
            this.state.tickets.map(ticket => <tr key={ticket.id}>
              <td>{ticket.id}</td>
              <td>{ticket.issue}</td>
              <td>{ticket.description}</td>
              <td>{ticket.resolved ? "✔️" : "❌"}</td>
              <td>{ticket.closed ? "✔️" : "❌"}</td>
            </tr>)
          }</tbody>
        </table>
        <input type="button" onClick={this.addTicketClicked} value="Add Ticket"></input>
      </div>
    )
  }
};

export default UserDashboardComponent;