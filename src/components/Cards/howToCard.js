import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText }  from 'reactstrap';

const HowToCard = props => {
  return (
    <Card className="col-10 col-md-3 col-lg-3 col-xl-3">
      <CardImg />
      <CardBody>
        <CardTitle>{props.card.title}</CardTitle>
        <CardText>{props.card.description}</CardText>
        <CardText>
          <small className="text-muted">Likes {props.card.likes}</small>
        </CardText>
      </CardBody>
    </Card>
  )
};

export default HowToCard;
