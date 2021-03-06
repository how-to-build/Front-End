import React from "react";
import { connect } from "react-redux";
import { Spinner } from "reactstrap";

import HowToCard from "./HowToCard";

import GetCards from "../../actions/GetCards";

class CardsList extends React.Component {
  state = {
    cards: [],
    isLoading: true
  };

  componentDidMount() {
    this.setState({ cards: this.props.GetCards(), isLoading: false });
  }

  render() {
    return (
      <div className="d-flex flex-row flex-wrap mt-4 mb-4 row justify-content-md-center align-items-center d-flex">
        {this.state.isLoading ? (
          <Spinner type="grow" color="secondary" />
        ) : null}
        {this.props.cards.length >= 1
          ? this.props.cards.map(card => (
              <HowToCard key={card.howToId} card={card} />
            ))
          : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cards: state.GetCards.cards
  };
};

export default connect(
  mapStateToProps,
  { GetCards }
)(CardsList);
