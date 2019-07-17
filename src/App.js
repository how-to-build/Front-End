import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import Home from "./components/Home";
import LoginPage from "./pages/LoginPage";
import AboutPage from "./pages/AboutPage";
import ProfilePage from "./pages/ProfilePage";
import ContactPage from './pages/ContactPage';
import Header from './components/Header';
import Footer from './components/Footer';

import "bootstrap/dist/css/bootstrap.min.css";
import AddCard from "./components/AddCardForm";

class App extends React.Component {
  state = {
    loggedIn: false,
    username: ''
  }

  redirectToHome = () => {
    this.props.history.push('/');
  }

  handlerLogInState = e => {
    this.setState({ loggedIn: true });
  }

  isUserLoggedIn = () => {
    if (this.state.loggedIn && localStorage.hasOwnProperty('token')) {
      this.redirectToHome()
    } else {
      return <LoginPage loggedIn={this.state.loggedIn}
      handlerLogInState={this.handlerLogInState} />
    }
  }

  render() {   
    return (
      <div className="h-100">
        <Header
          {...this.props}
          loggedIn={this.state.loggedIn}
        />
        <Switch>
          <Route exact path="/" render={() => <Home className="h-100"/>} />
          <Route
            path="/login"
            render={() => this.isUserLoggedIn()} 
          />
          <Route path="/about" render={() => <AboutPage className="h-100" />} />
          <Route path="/contact" render={() => <ContactPage />} />
          <Route path="/profile" render={() => <ProfilePage />} />
          <Route path="/add" render={() => <AddCard />} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App); //passes down router path for redirect
