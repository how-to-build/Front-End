import React from 'react';
import { connect } from 'react-redux';
import { Spinner, ButtonGroup, Button } from 'reactstrap';

import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      register: false
    }
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
      <div className="col-12">
        <ButtonGroup className="d-flex">
          <Button className="w-100" onClick={this.handlerAccount}>Log In</Button>
          <Button className="w-100" onClick={this.handlerAccount}>Register</Button>
        </ButtonGroup>
        {
          (this.props.loginPending || this.props.registerPending) ?
            (<div className="col-12 h-100 d-flex align-items-center">
              <Spinner color="secondary" className="mx-auto" />
            </div>)
          :
            this.state.register ?
              <RegisterForm />
            :
              <LoginForm />
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