import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

class RegisterForm extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: ''
  }
  
  handlerChange = e => {
    e.preventDefault();

    console.log(e.target.value);

    this.setState({ 
      [e.target.name]: `${[e.target.value]}`
    });
  }

  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="firstName">First Name</Label>
          <Input
            type="text"
            name="firstName"
            id="firstName"
            value={this.state.firstName}
            onChange={this.handlerChange}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label>Last Name</Label>
          <Input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handlerChange}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handlerChange}
          ></Input>
        </FormGroup>
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

export default RegisterForm;