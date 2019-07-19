import React from "react";
import { Button } from "reactstrap";
import { withRouter } from "react-router-dom";

class AddCartButton extends React.Component {
  addHowTo = e => {
    e.preventDefault();

    this.props.history.push("/add");
  };

  render() {
    return (
      <Button
        type="button"
        color="dark"
        expand="md"
        className="text-light"
        onClick={this.addHowTo}
      >
        Create How-To Article
      </Button>
    );
  }
}

export default withRouter(AddCartButton);
