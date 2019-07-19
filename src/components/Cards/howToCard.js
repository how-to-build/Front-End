import React from "react";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";
import howtoimg from "../../assets/howtoimg.jpg";
import Like from "../../actions/like";

const HowToCard = props => {
  return (
    <div className="col-11 col-sm-4 mx-auto m-2">
      <Card>
        <CardImg
          className="m-2 mx-auto d-block"
          top
          width="100%"
          src={howtoimg}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>
            <strong>{props.card.title}</strong>
          </CardTitle>
          <CardTitle className="d-flex justify-content-between">
            <Like />
            <small className="text-muted">Likes {props.card.likes}</small>
          </CardTitle>
        </CardBody>
      </Card>
    </div>
  )
}

export default HowToCard;
