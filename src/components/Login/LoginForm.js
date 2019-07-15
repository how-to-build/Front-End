import React from 'react';
import { Form, FormGroup, Label, Input, Alert, Button } from 'reactstrap';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { LoggingIn } from '../../actions/LogIn';

class LoginForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      isTooShort: false
    }
  }

  handlerChange = e => {
    e.preventDefault();

    this.setState({ 
      [e.target.name]: `${[e.target.value]}`
    });
  }

  handlerLogIn = e => {
    e.preventDefault();

    if (this.state.username.length > 4 && this.state.password.length > 4) {
      this.props.LoggingIn(this.state);

      if (this.props.logInSuccess) { // if login successful
        this.props.history.push('/home');
      }
    } else {
      this.setState({ isTooShort: true });
    }


  }

  render() {


    return (
      <Form onSubmit={this.handlerLogIn}>
        {
          this.state.isTooShort && <Alert color="warning">Please make sure you have 5 or more characters in each field.</Alert>
        }
        <FormGroup>
          <Label className="mb-0">Username</Label>
          <Input
            type="text"
            name="username"
            autoComplete="off"
            value={this.state.username}
            onChange={this.handlerChange}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label className="mb-0">Password</Label>
          <Input
            type="password"
            name="password"
            autoComplete="off"
            value={this.state.password}
            onChange={this.handlerChange}
          ></Input>
        </FormGroup>
        <Button
          type="submit"
          onClick={this.handlerLogIn}
          color="primary" size="md" block
        >Log In</Button>
      </Form>
    )
  }
}

const mapStateToProps = state => {
  return {
    logInSuccess: state.LoggingIn.success
  }
}

export default withRouter(connect(mapStateToProps, { LoggingIn })(LoginForm));