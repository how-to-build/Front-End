import React from 'react';
import { Form, FormGroup, Label, Input, Alert, Button } from 'reactstrap';
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
    } else {
      this.setState({ isTooShort: true });

      setTimeout(()=> {
        this.setState({ isTooShort: false });
      }, 5000);
    }


  }

  render() {
    console.log(this.props);

    return (
      <Form onSubmit={this.handlerLogIn} className="mt-2">
        {
          this.state.isTooShort && <Alert color="warning">Please make sure you have 5 or more characters in each field.</Alert>
        }
        {
          this.props.logInFailure === 500 && <Alert color="danger" className="mb-1">Username or password is incorrect. Please try again.</Alert>
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
    logInSuccess: state.LoggingIn.success,
    logInFailure: state.LoggingIn.error
  }
}

export default connect(mapStateToProps, { LoggingIn })(LoginForm);