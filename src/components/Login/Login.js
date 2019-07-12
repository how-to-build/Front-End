import React from 'react';
import { connect } from 'react-redux';
import { Spinner } from 'reactstrap';

import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

class Login extends React.Component {
  state = {
    register: false
  }

  handlerAccount = e => {
    e.preventDefault();

    if (e.target.innerText === "Register") {
      this.setState({ register: true });
    } else {
      this.setState({ register: false });
    }
  }

  render() {
    return (
      <div className="login">
        <div>Login Component</div>
        <div col="8">
          <div>
            <button onClick={this.handlerAccount}>Log In</button>
            <button onClick={this.handlerAccount}>Register</button>
          </div>
          {
            (this.props.loginPending || this.props.registerPending) ?
              (<Spinner color="secondary" />) 
            :
              this.state.register ? <RegisterForm /> : <LoginForm />
          }
        </div>
      </div>
    )   
  }
}

const mapStateToProps = state => {
  return {
    loginPending: state.LoggingIn.pending,
    registerPending: state.Registering.pending
  }
}

export default connect(mapStateToProps, {})(Login);