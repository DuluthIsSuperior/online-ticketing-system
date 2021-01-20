import React, { Component } from 'react';
import LoginService from '../services/LoginService';

class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: '',
      message: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    LoginService.kick();
  }

  handleSubmit(event) {
    event.preventDefault(); // prevents the form from doing its normal behavior when submitted
    LoginService.login(this.state.user_id).then(response => {
      if (response.data) {
        this.props.history.push("/UserDashboard");
      } else {
        this.setState({
          message: 'Error logging in'
        });
      }
    });
  }

  handleChange(event) {
    this.setState({
      user_id: event.target.value
    });
  }

  render() {
    return(
      <div className="home">
        User ID:<br/>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="user_id" onChange={this.handleChange}/>
          <button onClick={this.handleSubmit}>Submit</button><br/>
        </form>
        {/* 
         */}
        {this.state.message}
      </div>
    );
  }
};

export default HomeComponent;