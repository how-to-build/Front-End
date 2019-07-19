import React from "react";
import { connect } from 'react-redux';
import { Spinner } from 'reactstrap';

import HowToContent from "../components/HowToContent";

import { HowToContent as HowToContentGet } from "../actions/HowToContent";

class HowtoContentPage extends React.Component {
  state = {
    isLoading: true,
    content: {}
  }

  componentDidMount() {
    const findId = this.props.location.pathname.split('/');

    this.props.HowToContentGet(findId[2]);

    this.setState({ content: this.props.contentHowTos, isLoading: false });
  }

  render() {
    return (
      <div className="col-12 bg-light p-0 mt-5">
        <div className="col-md-8 col-sm-10 mx-auto pb-4 pt-4">
          {
            !this.props.contentSuccess ?
              <Spinner color="secondary" />
            : 
             <HowToContent success={this.props.contentHowTos}/>
          }
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    contentPending: state.HowToContent.pending,
    contentSuccess: state.HowToContent.success,
    contentHowTos: state.HowToContent.content
  }
}

export default connect(mapStateToProps, { HowToContentGet })(HowtoContentPage);
