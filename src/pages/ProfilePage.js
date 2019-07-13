import React from 'react';
import {} from 'reactstrap';

import UserProfile from '../components/UserProfile';
import ChangePasswordForm from '../components/ChangePasswordForm';

class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            changePassword: false
        }
        this.toggleChangePasswordForm = this.toggleChangePasswordForm.bind(this);
    }

    toggleChangePasswordForm(event) {
        this.setState(prevState => ({
            changePassword: !prevState.changePassword
        }));
    }

    render() {
        return (
            <div className="col-12 bg-light">
                {/* {this.state.changePassword ? <ChangePasswordForm handleClick={this.toggleChangePasswordForm} /> : <UserProfile handleClick={this.toggleChangePasswordForm} />} */}
            </div>
        );
    }
}

export default ProfilePage;