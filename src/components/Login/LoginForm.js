import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

class LoginForm extends React.Component {
  state = {
    username: "",
    password: ""
  }

  handlerChange = e => {
    e.preventDefault();

    this.setState({ 
      [e.target.name]: [e.target.value]
    });
  }

  render() {
    return (
      <Form>
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
        <button>Log In</button>
      </Form>
    )
  }
}

export default LoginForm;