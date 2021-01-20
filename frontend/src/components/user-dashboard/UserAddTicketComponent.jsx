import React, { Component } from 'react';
import LoginService from '../../services/LoginService';
import TicketService from '../../services/ticket/TicketService';

class UserAddTicketComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: 'Please wait',
      issue: '',
      description: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    LoginService.userLoggedIn().then(response => {
        this.setState({loggedIn: response.data});
        if (!this.state.loggedIn) {  // string is false if it is empty, null, or undefined
          this.setState({ header: "You are not logged in"});
          this.props.history.push("/");
        } else {
          this.setState({ header: "New Ticket"});
        }
      }
    );
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let ticket = {
      issue: this.state.issue,
      description: this.state.description
    };
    TicketService.addTicket(ticket).then(response => {
      if (response.data) {
        this.setState({
          status: "OK"
        });
        this.props.history.push("/UserDashboard", this.state);
      }
    });
  }

  render() {
    return(
      <div className="addTicket">
        <h1>New Ticket</h1>
        <form onSubmit={this.handleSubmit}>
          Issue: <input type="text" name="issue" onChange={this.handleChange}/><br/>
          Description: <input type="text" name="description" onChange={this.handleChange}/><br/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
};

export default UserAddTicketComponent;