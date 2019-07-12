import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

const UserProfile = props => {
  return (
    <Card>
      <CardBody>
        <CardTitle>Account</CardTitle>
        <CardText>{props.user.username}</CardText>
        <CardText>{props.user.password}</CardText>
      </CardBody>
    </Card>
  );
}

UserProfile.defaultProps = {
  user: {
    username: 'DefaultUser',
    password: 'password'
  }
}

export default UserProfile;