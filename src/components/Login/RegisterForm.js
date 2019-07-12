import React from 'react';
import { Form, FormGroup, Label, Input, Alert, Button } from 'reactstrap';

import { Registering } from '../../actions/Registering';
import { connect } from 'react-redux';

class RegisterForm extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    isTooShort: false
  }
  
  handlerChange = e => {
    e.preventDefault();
    
    this.setState({ 
      [e.target.name]: `${[e.target.value]}`
    });
  }

  handlerRegistering = e => {
    e.preventDefault();

    if (this.state.username.length > 4 && this.state.password.length > 4) {
      this.props.Registering(this.state);
    } else {
      this.setState({ isTooShort: true });
    }   
  }

  render() {
    return (
      <Form onSubmit={this.handlerRegistering} col="8">
        {
          this.state.isTooShort && <Alert color="warning">Please make sure you have 5 or more characters in each field.</Alert>
        }
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
            minLength="5"
            autoComplete="off"
            value={this.state.username}
            onChange={this.handlerChange}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            minLength="5"
            autoComplete="off"
            value={this.state.password}
            onChange={this.handlerChange}
          ></Input>
        </FormGroup>
        <Button
          type="submit"
          onClick={this.handlerLogIn}
          color="primary" size="md" block
        >Sign Up</Button>
      </Form>
    )
  }
}

export default connect(null, { Registering })(RegisterForm);