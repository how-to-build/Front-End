import React from "react";
import { connect } from "react-redux";
import {
  Card,
  CardBody,
  Button,
  CardTitle,
  CardText,
  CardImg,
  Spinner
} from "reactstrap";

import HowToCard from "./howToCard";

import getCards from "../../actions/getCards";

class CardsList extends React.Component {
  state = {
    isLoading: true
  };

  componentDidMount() {
    this.props.getCards();
    this.setState({ isLoading: false });
  }

  render() {
    return (
      <div className="d-flex flex-row flex-wrap align-items-start justify-content-start mt-4 mb-4">
        <Card className="col-5 m-2">
          <CardImg
            top
            width="100%"
            src="https://laurenpoussard.com/wp-content/uploads/2017/07/How-to-lauren-poussard-creative-studio-danvers.jpg"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Card Title</CardTitle>
            <CardText>Card Text</CardText>
            <CardText>
              <small className="text-muted">Last updated 3 mins ago</small>
            </CardText>
          </CardBody>
        </Card>
        {/* {this.props.isLoading ? (
          <Spinner type="grow" color="secondary" />
        ) : null}
        {this.props.cards.length >= 1
          ? this.props.cards.map(card => (
              <HowToCard key={card.id} card={card} />
            ))
          : null} */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cards: state.getCards.cards
  };
};

export default connect(
  mapStateToProps,
  { getCards }
)(CardsList);
