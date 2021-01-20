import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import UserDashboardComponent from './components/user-dashboard/UserDashboardComponent';
import UserAddTicketComponent from './components/user-dashboard/UserAddTicketComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomeComponent}/>
          <Route path="/UserDashboard" component={UserDashboardComponent}/>
          <Route path="/UserDashboard/add" component={UserAddTicketComponent}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
