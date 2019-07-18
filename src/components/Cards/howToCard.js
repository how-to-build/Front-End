import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import howtoimg from "../../assets/howtoimg.jpg";
import Like from "../../actions/like";

const HowToCard = props => {
  return (
    <Card className="col-4 m-2">
      <CardImg
        className="m-2 mx-auto d-block"
        top
        width="100%"
        src={howtoimg}
        alt="Card image cap"
      />
      <CardBody>
        <CardTitle>{props.card.title}</CardTitle>
        <CardText>{props.card.description}</CardText>
        <CardText>
          <small className="text-muted">Likes {props.card.likes}</small>
        </CardText>
        <Like />
        <CardText>
          <small className="text-muted">Last updated 3 mins ago</small>
        </CardText>
      </CardBody>
    </Card>
  );
};

export default HowToCard;
