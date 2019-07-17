import React from "react";
import {} from "reactstrap";

import Header from "../components/Header";
import Footer from "../components/Footer";
import UserProfile from "../components/UserProfile";
import ChangePasswordForm from "../components/ChangePasswordForm";

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

  render() {
    return (
      <div className="col-12 bg-light p-0">
        <div className="mx-auto pb-4 pt-4">
          {this.state.changePassword ? (
            <ChangePasswordForm handleClick={this.toggleChangePasswordForm} />
          ) : (
            <UserProfile handleClick={this.toggleChangePasswordForm} />
          )}
        </div>
      </div>
    );
  }
}

export default ProfilePage;
