import React from 'react';
import { connect } from 'react-redux';
import { Spinner } from 'reactstrap';

import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

class Login extends React.Component {
  state = {
    register: false,
    working: false
  }

  handlerAccount = e => {
    e.preventDefault();

    if (e.target.innerText === "Register") {
      this.setState({ register: true });
    } else {
      this.setState({ register: false });
    }
  }

  handlerFormsWorking = () => {
    this.setState({ working: !this.state.working });
  }

  render() {
    console.log(this.props.loginPending, this.props.registerPending);

    return (
      <div className="login">
        <div>Login Component</div>
        <div>
          <div>
            <button onClick={this.handlerAccount}>Log In</button>
            <button onClick={this.handlerAccount}>Register</button>
          </div>
          {
            (this.props.loginPending || this.props.registerPending) && (<Spinner color="secondary" />)
          }
          {
            this.state.register ? <RegisterForm handlerFormsWorking={this.handlerFormsWorking}/> : <LoginForm handlerFormsWorking={this.handlerFormsWorking}/>
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