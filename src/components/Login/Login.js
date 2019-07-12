import React from 'react';

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
        <div>
          <div>
            <button onClick={this.handlerAccount}>Log In</button>
            <button onClick={this.handlerAccount}>Register</button>
          </div>
          {
            this.state.register ? <RegisterForm /> : <LoginForm />
          }
        </div>
      </div>
    )
  }
}

export default Login;