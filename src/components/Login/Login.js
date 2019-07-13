import React from 'react';
import { connect } from 'react-redux';
import { Spinner, ButtonGroup, Button } from 'reactstrap';

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
      <div col="8">
        <ButtonGroup className="d-flex">
          <Button className="w-100" onClick={this.handlerAccount}>Log In</Button>
          <Button className="w-100" onClick={this.handlerAccount}>Register</Button>
        </ButtonGroup>
        {
          (this.props.loginPending || this.props.registerPending) ?
            (<Spinner color="secondary" />) 
          :
            this.state.register ? <RegisterForm /> : <LoginForm />
        }
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