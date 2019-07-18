import React from 'react';

import classnames from 'classnames';

import { Card, CardBody, CardTitle, CardText, Button, FormGroup, Label, Input, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import defaultAvatar from '../assets/defaultavatar.jpg';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: '1'
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab });
    }
  }

  render() {
    return (
      <div>
        <Card className="col-md-5 col-sm-10 mx-auto mb-4">
          <CardBody>
            <CardTitle><h1>Profile</h1></CardTitle>
          </CardBody>
          <Nav tabs>
            <NavItem>
              <NavLink className={classnames({ active: this.state.activeTab === '1'})} onClick={() => { this.toggle('1'); }}>Profile Info</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={classnames({ active: this.state.activeTab === '2'})} onClick={() => { this.toggle('2'); }}>Created HowTos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={classnames({ active: this.state.activeTab === '3'})} onClick={() => { this.toggle('3'); }}>Liked HowTos</NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <CardBody className="text-center">
                <img src={defaultAvatar} alt="Profile Img" className="img-thumbnail mx-auto d-block" />
                <CardText>{this.props.user.email}</CardText>
              </CardBody>
              <CardBody>
                <FormGroup>
                  <Label for="username">Username</Label>
                  <Input disabled type="text" name="username" value={this.props.user.username} />
                </FormGroup>
                <Button color="secondary" onClick={this.props.handleClick}>Change Password</Button>
              </CardBody>
            </TabPane>
            <TabPane tabId="2">
              {this.props.cards.filter(card => {
                return card.user_id === this.props.user.id;
              }).map((card, index) => <div key={index}>{card.title}</div>)}
            </TabPane>
            <TabPane tabId="3">
              <h3>HowTos that the user has liked will show up here!</h3>
            </TabPane>
          </TabContent>
        </Card>
      </div>
    );
  }
}

UserProfile.defaultProps = {
  user: {
    email: 'johndoe@gmail.com',
    username: 'DefaultUser',
    password: 'password'
  }
}

export default UserProfile;