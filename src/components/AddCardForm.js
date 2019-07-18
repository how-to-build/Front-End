import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
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
  }

  render() {
    return(
      <Form>
          <FormGroup>
            <Label className="mb-0">title</Label>
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
    pending: state.AddCard.pending
  }
}

export default connect(mapStateToProps, { AddingCard })(AddCard);