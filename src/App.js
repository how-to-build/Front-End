import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
//import Login from './components/Login/Login';
import UserProfile from './components/UserProfile.js';

class App extends React.Component {
  state = {
    loggedIn: false
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/login" render={() => <></>} /> { /* Register is a nested Route */ }
          <Route path="/about" render={() => <></>} />
          <Route path="/contact" render={() => <></>} />
          <Route path="/profile" render={() => <UserProfile />} />
        </Switch>
      </Router>
    );
  }
}

export default App;
