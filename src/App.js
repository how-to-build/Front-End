import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import Home from "./components/Home";
import LoginPage from './pages/LoginPage';
import AboutPage from "./pages/AboutPage";
import ProfilePage from "./pages/ProfilePage";
import ContactPage from './pages/ContactPage';
import Header from './components/Header';
import Footer from './components/Footer';

import "bootstrap/dist/css/bootstrap.min.css";

const loggedIn = localStorage.hasOwnProperty('token');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: loggedIn
    } 
  }

  redirectToHome = () => {
    this.props.history.push('/');
  }

  render() {   
    return (
      <div className="h-100">
        <Header {...this.props} loggedIn={this.state.loggedIn} />
        <Switch>
          <Route exact path="/" render={() => <Home className="h-100"/>} />
          <Route
            path="/login"
            render={() => this.state.loggedIn ? this.redirectToHome() : <LoginPage />} 
          />
          <Route path="/about" render={() => <AboutPage className="h-100" />} />
          <Route path="/contact" render={() => <ContactPage />} />
          <Route path="/profile" render={() => <ProfilePage />} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App); //passes down router path for redirect
