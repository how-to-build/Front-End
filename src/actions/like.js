import React from "react";

class Like extends React.Component {
  constructor() {
    super();
    this.state = {
      liked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      liked: !this.state.liked
    });
  }

  render() {
    const heart = this.state.liked
      ? "fa fa-heart text-danger"
      : "fa fa-heart-o";
    return (
      <div className="customContainer">
        <i className={heart} onClick={this.handleClick} />
      </div>
    );
  }
}

export default Like;
