import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText }  from 'reactstrap';

const HowToCard = props => {
  return (
    <Card className="col-5 m-2">
      <CardImg
        top
        width="100%"
        src="https://laurenpoussard.com/wp-content/uploads/2017/07/How-to-lauren-poussard-creative-studio-danvers.jpg"
        alt="Card image cap"
      />
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
