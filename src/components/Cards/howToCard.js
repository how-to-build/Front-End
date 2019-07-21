import React from "react";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";
import { withRouter } from "react-router-dom";

import howtoimg from "../../assets/howtoimg.jpg";
import Like from "../../actions/like";

class HowToCard extends React.Component {
  constructor(props) {
    super(props);
  }

  handlerClick = e => {
    e.preventDefault();

    if (e.target.parentNode.getAttribute("href")) {
      this.props.history.push(e.target.parentNode.getAttribute("href"));
    }
  };

  render() {
    return (
      <div className="col-11 col-sm-4 mx-auto m-2">
        <Card>
          <a href={`/how-to/${this.props.card.howToId}`} onClick={this.handlerClick}>
            <CardImg
              className="mx-auto d-block"
              top
              width="100%"
              src={howtoimg}
              alt="Card image cap"
            />
          </a>
          <CardBody>
            <CardTitle>
              <a href={`/how-to/${this.props.card.howToId}`} onClick={this.handlerClick} className="text-dark">
                <strong>{this.props.card.title}</strong>
              </a>
            </CardTitle>
            <CardTitle className="d-flex justify-content-between mb-0">
              <Like />
              <small className="text-muted">Likes {this.props.card.likes}</small>
            </CardTitle>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default withRouter(HowToCard);
