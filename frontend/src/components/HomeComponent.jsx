import React, { useState } from 'react';
import LoginService from '../services/LoginService';

const HomeComponent = (props) => {
  const [constructorHasRun, setConstructorHasRun] = useState(false);
  const [state, setState] = useState({
    user_id: '',
    message: 'Connecting...'
  });
  
  const constructor = () => {
    if (constructorHasRun) return;
    LoginService.kick().then(response => {
      setState({
        message: ''
      });
      document.getElementById('userID').disabled = false;
      document.getElementById('userSubmit').disabled = false;
    }).catch(exception => {
      setState({
        message: 'There was an error connecting to the service'
      });
    });
    setConstructorHasRun(true);
  };
  constructor();

  const handleSubmit = (event) => {
    event.preventDefault(); // prevents the form from doing its normal behavior when submitted
    LoginService.login(state.user_id).then(response => {
      if (response.data) {
        props.history.push("/UserDashboard");
      } else {
        setState({
          message: 'Error logging in'
        });
      }
    }).catch(exception => {
      setState({
        message: 'There was an error connecting to the service'
      });
    });
  };

  const handleChange = (event) => {
    setState({
      user_id: event.target.value
    });
  };

  return(
      <div className="home">
        User ID:<br/>
        <form onSubmit={handleSubmit}>
          <input id="userID" type="text" name="user_id" onChange={handleChange} disabled/>
          <button id="userSubmit" onClick={handleSubmit} disabled>Submit</button><br/>
        </form>
        <span>{state.message}</span>
      </div>
  );
};

export default HomeComponent;