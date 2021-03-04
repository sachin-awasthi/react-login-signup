import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import DashboardPage from './components/DashboardPage';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/login" component={LoginForm} />
      <Route path="/signup" component={SignupForm} />
      <Route path="/dashboard" component={DashboardPage} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
