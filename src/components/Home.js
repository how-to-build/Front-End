import React from "react";
import { connect } from 'react-redux';
import { Spinner } from 'reactstrap';

import CardsList from "./Cards/CardsList";

class Home extends React.Component {
  
  render() {
    return (
      <div className="bg-light p-0">
        <div className="col-md-10 mx-auto pb-4 pt-4">
          {
            this.props.pending ? 
              <Spinner color="secondary" />
            :
              <CardsList />
          }
        </div>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    pending: state.GetCards.pending
  }
}

export default connect(mapStateToProps, { })(Home);
