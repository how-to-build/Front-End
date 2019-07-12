import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';

import { LoggingIn } from '../../actions/LogIn';

class LoginForm extends React.Component {
  state = {
    username: "",
    password: ""
  }

  handlerChange = e => {
    e.preventDefault();

    this.setState({ 
      [e.target.name]: `${[e.target.value]}`
    });
  }

  handlerLogIn = e => {
    e.preventDefault();

    this.props.handlerFormsWorking();

    this.props.LoggingIn(this.state);
  }

  render() {
    return (
      <Form onSubmit={this.handlerLogIn}>
        <FormGroup>
          <Label>Username</Label>
          <Input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handlerChange}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
            type="text"
            name="password"
            value={this.state.password}
            onChange={this.handlerChange}
          ></Input>
        </FormGroup>
        <button
          type="submit"
          onClick={this.handlerLogIn}
        >Log In</button>
      </Form>
    )
  }
}

export default connect(null, { LoggingIn })(LoginForm);