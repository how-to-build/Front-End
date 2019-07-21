import React from 'react';
import { Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import { connect } from 'react-redux';

import {AddCard as AddingCard} from '../actions/AddCard';

// needs to receive user_id or username
//const user_id = ;

class AddCard extends React.Component {
  state = {
    title: '',
    description: '',
    user_id: '1'
  }

  handlerChange = e => {
    e.preventDefault();

    this.setState({ [e.target.name]: e.target.value });
  }

  handlerFormSubmit = e => {
    e.preventDefault();

    this.props.AddingCard(this.state);

    this.setState({ title: '', description: ''});
  }

  render() {
    return(
      <Form>
        {
          this.props.success ?
            <Alert color="success">
              Thank you for your how-to! Return to Home or your profile to view the card.
            </Alert>
          :
            null
        }
        <FormGroup>
          <Label className="mb-0">Title</Label>
          <Input
            type="title"
            name="title"
            value={this.state.title}
            onChange={this.handlerChange}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label className="mb-0">Description</Label>
          <Input
            type="description"
            name="description"
            value={this.state.description}
            onChange={this.handlerChange}
          ></Input>
        </FormGroup>
        <Button
          type="submit"
          onClick={this.handlerFormSubmit}
          color="primary" size="md" block
        >Add How To</Button>
      </Form>
    )
  }
}

const mapStateToProps = state => {
  return {
    pending: state.AddCard.pending,
    success: state.AddCard.success
  }
}

export default connect(mapStateToProps, { AddingCard })(AddCard);