import React from 'react';
import { Form, FormGroup, Label, Input, Alert, Button } from 'reactstrap';

import { Registering } from '../../actions/Registering';
import { connect } from 'react-redux';

class RegisterForm extends React.Component {
  state = {
    // firstName: '',
    // lastName: '',
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
      
      this.props.handlerRegisterStatus();
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
        {/* <FormGroup className="mb-0">
          <Label className="mb-0" for="firstName">First Name</Label>
          <Input
            type="text"
            name="firstName"
            id="firstName"
            value={this.state.firstName}
            onChange={this.handlerChange}
          ></Input>
        </FormGroup>
        <FormGroup className="mb-0">
          <Label className="mb-0" for="lastName">Last Name</Label>
          <Input
            type="text"
            name="lastName"
            id="lastName"
            value={this.state.lastName}
            onChange={this.handlerChange}
          ></Input>
        </FormGroup> */}
        <FormGroup className="mb-0">
          <Label className="mb-0" for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            value={this.state.email}
            onChange={this.handlerChange}
          ></Input>
        </FormGroup>
        <FormGroup className="mb-0">
          <Label className="mb-0" for="username">Username</Label>
          <Input
            type="text"
            name="username"
            id="username"
            minLength="5"
            autoComplete="off"
            value={this.state.username}
            onChange={this.handlerChange}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label className="mb-0" for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
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

const mapStateToProps = state => {
  return {
    registerSuccess: state.Registering.success
  }
}

export default connect(mapStateToProps, { Registering })(RegisterForm);