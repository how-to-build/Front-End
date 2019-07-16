import React from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';

class ContactForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  handlerChange = e => {
    e.preventDefault();

    this.setState({ [e.target.name]: [e.target.value] });
  }

  render() {
    return(
      <Form className="col-10 mx-auto">
        <FormGroup className="d-flex flex-row">
          <FormGroup className='col-6 pr-1 pl-0'>
            <Label for="name">Name</Label>
            <Input
              type="text"
              name="name"
              id="name"
              value={this.state.name}
              onChange={this.handlerChange}
              />
          </FormGroup>
          <FormGroup className='col-6 pr-0 pl-1'>
            <Label for="email">Email</Label>
            <Input
              type="text"
              name="email"
              id="email"
              value={this.state.email}
              onChange={this.handlerChange}
            />
          </FormGroup>
        </FormGroup>
        <FormGroup>
          <Label for="message">Message</Label>
          <Input
            type="textarea"
            name="message"
            id="message"
            maxLength="255"
            value={this.state.message}
            onChange={this.handlerChange}
          />
        </FormGroup>
      </Form>
    )
  }
}

export default ContactForm;