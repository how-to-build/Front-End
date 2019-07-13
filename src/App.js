import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import LoginPage from './pages/LoginPage';
import AboutPage from './pages/AboutPage';
import UserProfile from './components/UserProfile.js';

class App extends React.Component {
  state = {
    loggedIn: false
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Home className="h-100"/>} />
          <Route path="/login" render={() => <LoginPage />} />
          <Route path="/about" render={() => <AboutPage className="h-100" />} />
          <Route path="/contact" render={() => <></>} />
          <Route path="/profile" render={() => <UserProfile />} />
        </Switch>
      </Router>
    );
  }
}

export default App;
