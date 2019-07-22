import React from 'react';
import { FormGroup, Label, Input, Button } from 'reactstrap';

class AddCardSteps extends React.Component {
  state = {
    stepCounter: 1
  }

  handlerAddField = e => {
    e.preventDefault();

    const stepIncrementer = this.state.stepCounter;
  
    this.setState({ stepCounter: stepIncrementer + 1 });
  }

  render() {
    let children = [];
    
    for (let i = 0; i < this.state.stepCounter; i++) {
      children.push(<Input
        type="title"
        name="title"
        onChange={this.handlerChange}
        className="mb-2"
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
          <Button onClick={this.handlerAddField}>+</Button>
        </FormGroup>
      </FormGroup>
    )
  }
}

export default AddCardSteps;