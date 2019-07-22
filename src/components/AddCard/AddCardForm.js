import React from 'react';
import { Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import { connect } from 'react-redux';

import {AddCard as AddingCard} from '../../actions/AddCard';
import AddCardSteps from './AddCardSteps';

// needs to receive user_id or username
//const user_id = ;

class AddCard extends React.Component {
  state = {
    title: '',
    description: '',
    steps: [
      {
        title: ''
      },
      {
        title: ''
      },
      {
        title: ''
      },
      {
        title: ''
      },
      {
        title: ''
      },
      {
        title: ''
      },
      {
        title: ''
      }
    ],
    user_id: '1'
  }

  handlerChange = e => {
    e.preventDefault();

    this.setState({ [e.target.name]: e.target.value });
  }

  handlerStepChange = e => {
    let targetClasses = e.target.classList[1];
    let splitTarget = targetClasses.split('-');
    let splitTargetIndex = splitTarget[1];

    this.handlerStepChangeState(e, splitTargetIndex);
  }
  
  handlerStepChangeState = (e, index) => {
    const stepsArr = this.state.steps;

    stepsArr[index] = {
      title: e.target.value,
      description: 'A recently added how-to'
    };
  
    this.setState({
      steps: stepsArr
    });
  }

  handlerFormSubmit = e => {
    e.preventDefault();

    this.props.AddingCard(this.state);

    const clearedSteps = this.state.steps;
    clearedSteps.forEach(el => el.title = '')

    this.setState({ title: '', description: '', steps: clearedSteps });
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
        <AddCardSteps handlerStepChange={this.handlerStepChange} steps={this.state.steps}/>
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