import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import LoginPage from './pages/LoginPage';
import About from './components/About';
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
          <Route path="/login" render={() => <LoginPage />} />
          <Route path="/about" render={() => <About />} />
          <Route path="/contact" render={() => <></>} />
          <Route path="/profile" render={() => <UserProfile />} />
        </Switch>
      </Router>
    );
  }
}

export default App;
