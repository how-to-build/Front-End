import React from 'react';
import { Card, CardBody, CardTitle, CardText, Button, FormGroup, Label, Input } from 'reactstrap';
import defaultAvatar from '../assets/defaultavatar.jpg';

const UserProfile = props => {
  return (
    <Card className="col-md-5 col-sm-10 mx-auto mb-4">
      <CardBody>
        <CardTitle><h1>Profile</h1></CardTitle>
      </CardBody>
      <CardBody className="text-center">
        <img src={defaultAvatar} alt="Profile Img" className="img-thumbnail mx-auto d-block" />
        <CardText>{`${props.user.first_name} ${props.user.last_name}`}</CardText>
        <CardText>{props.user.email}</CardText>
      </CardBody>
      <CardBody>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input disabled type="text" name="username" value={props.user.username} />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input disabled type="text" name="password" value={props.user.password} />
        </FormGroup>
        {/* <CardText>{props.user.username}</CardText> */}
        {/* <CardText>{props.user.password}</CardText> */}
        <Button color="secondary" onClick={props.handleClick}>Change Password</Button>
      </CardBody>
    </Card>
  );
}

UserProfile.defaultProps = {
  user: {
    first_name: 'John',
    last_name: 'Doe',
    email: 'johndoe@gmail.com',
    username: 'DefaultUser',
    password: 'password'
  }
}

export default UserProfile;