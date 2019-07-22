import React from 'react';
import { FormGroup, Label, Input, Button } from 'reactstrap';

class AddCardSteps extends React.Component {
  state = {
    stepCounter: 1
  }

  handlerAddField = e => {
    e.preventDefault();

    const stepIncrementer = this.state.stepCounter;
    if (this.state.stepCounter <= 6) {
      this.setState({ stepCounter: stepIncrementer + 1 });
    }
  }

  render() {
    let children = [];
    
    for (let i = 0; i < this.state.stepCounter; i++) {
      children.push(<Input
        type="title"
        name="title"
        value={this.props.steps.i}
        onChange={this.props.handlerStepChange}
        className={`mb-2 index-${i}`} 
        key={i}
      ></Input>)
    }

    return (
      <FormGroup>
        <FormGroup className="steps">
          <Label className="mb-0">Steps</Label>
          {children}
        </FormGroup>
        <FormGroup>
          <Button onClick={this.handlerAddField}>+ Add Step (max 7)</Button>
        </FormGroup>
      </FormGroup>
    )
  }
}

export default AddCardSteps;