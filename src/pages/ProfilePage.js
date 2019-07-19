import React from "react";
import { connect } from 'react-redux';

import { getUser } from '../actions/GetUser';
import GetCards from '../actions/GetCards';

import UserProfile from '../components/UserProfile';
import ChangePasswordForm from '../components/ChangePasswordForm';

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      changePassword: false
    };
    this.toggleChangePasswordForm = this.toggleChangePasswordForm.bind(this);
  }

  toggleChangePasswordForm(event) {
    this.setState(prevState => ({
      changePassword: !prevState.changePassword
    }));
  }

  componentDidMount() {
    this.props.getUser(this.props.username);
    this.props.GetCards();
  }

  render() {
    return (
      <div className="col-12 bg-light p-0">
        <div className="mx-auto pb-4 pt-4">
          {this.state.changePassword ? (
            <ChangePasswordForm handleClick={this.toggleChangePasswordForm} username={this.props.user.username}/>
          ) : (
            <UserProfile handleClick={this.toggleChangePasswordForm} user={this.props.user} cards={this.props.cards} />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.GettingUser.user,
    cards: state.getCards.cards
  }
}

export default connect(mapStateToProps, { getUser, GetCards })(ProfilePage);
