import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import Home from "./components/Home";
import LoginPage from './pages/LoginPage';
import AboutPage from "./pages/AboutPage";
import ProfilePage from "./pages/ProfilePage";
import "bootstrap/dist/css/bootstrap.min.css";

const loggedIn = localStorage.hasOwnProperty('token');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: loggedIn
    } 
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Home className="h-100"/>} />
        <Route path="/login"
          render={() => {
            if(this.state.loggedIn) {
              // console.log(this.props);
              this.props.history.push('/')
            } else {
              return <LoginPage />
            }
          }
        }/>
        <Route path="/about" render={() => <AboutPage className="h-100" />} />
        <Route path="/contact" render={() => <></>} />
        <Route path="/profile" render={() => <ProfilePage />} />
      </Switch>
    );
  }
}

export default withRouter(App); //passes down router path for redirect
