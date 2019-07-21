import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import Home from "./components/Home";
import LoginPage from "./pages/LoginPage";
import AboutPage from "./pages/AboutPage";
import ProfilePage from "./pages/ProfilePage";
import ContactPage from "./pages/ContactPage";
import AddCardPage from "./pages/AddCardPage";
import NoMatchPage from "./pages/NoMatchPage";
import HowToContentPage from "./pages/HowToContentPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  state = {
    loggedIn: false,
    username: "shawn"
  };

  redirectToHome = () => {
    this.props.history.push("/");
  };

  handlerLogInState = value => {
    this.setState({ loggedIn: value });
  };

  isUserLoggedIn = () => {
    if (this.state.loggedIn && localStorage.hasOwnProperty("token")) {
      this.redirectToHome();
    } else {
      return (
        <LoginPage
          loggedIn={this.state.loggedIn}
          handlerLogInState={this.handlerLogInState}
        />
      );
    }
  };

  render() {
    return (
      <div className="h-100 bg-light">
        <Header
          {...this.props}
          loggedIn={this.state.loggedIn}
          handlerLogInState={this.handlerLogInState}
        />
        <Switch>
          <Route exact path="/" render={() => <Home className="h-100" />} />
          <Route path="/login" render={() => this.isUserLoggedIn()} />
          <Route path="/about" render={() => <AboutPage className="h-100" />} />
          <Route path="/contact" render={() => <ContactPage />} />
          <Route
            path="/profile"
            render={() => <ProfilePage username={this.state.username} />}
          />
          <Route path="/add" render={() => <AddCardPage />} />
          <Route
            path="/how-to/:id"
            render={() => <HowToContentPage {...this.props} />}
          />
          <Route component={NoMatchPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App); //passes down router path for redirect
