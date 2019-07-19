import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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

  handlerRegisterStatus = () => {
    this.setState({ register: false });
  }

  handlerRedirect = () => {
    this.setState({ loginSuccess: false });
    this.props.history.push('/');
  }

  handlerButtonActive = id => {
    if (id === "logIn") {
      return !this.state.register ? 'active' : '';
    } else {
      return this.state.register ? 'active' : '';
    }
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps);
    
    if (this.props.loginSuccess) {
      this.props.handlerLogInState(true);
      this.handlerRedirect();
    }
  }

  render() {
    return (
      <div className="col-12">
        <ButtonGroup className="d-flex">
          <Button className={`w-100 ${this.handlerButtonActive('logIn')}`} onClick={this.handlerAccount}>Log In</Button>
          <Button className={`w-100 ${this.handlerButtonActive()}`} onClick={this.handlerAccount}>Register</Button>
        </ButtonGroup>
        {
          (this.props.loginPending || this.props.registerPending) ?
            (<div className="col-12 h-100 d-flex align-items-center">
              <Spinner color="secondary" className="mx-auto" />
            </div>)
          :
            this.state.register ?
              <RegisterForm handlerRegisterStatus={this.handlerRegisterStatus} />
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
    loginSuccess: state.LoggingIn.success,
    registerPending: state.Registering.pending
  }
}

export default withRouter(connect(mapStateToProps, {})(Login));