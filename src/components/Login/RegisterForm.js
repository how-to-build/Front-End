import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

import { Registering } from '../../actions/Registering';
import { connect } from 'react-redux';

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
    
    this.setState({ 
      [e.target.name]: `${[e.target.value]}`
    });
  }

  handlerRegistering = e => {
    e.preventDefault();

    this.props.handlerFormsWorking();

    this.props.Registering(this.state);
  }

  render() {
    return (
      <Form onSubmit={this.handlerRegistering}>
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
        <button
          type="submit"
          onClick={this.handlerRegistering}  
        >Log In</button>
      </Form>
    )
  }
}

export default connect(null, { Registering })(RegisterForm);