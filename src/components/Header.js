import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import styled from 'styled-components';

import AddCardButton from '../components/AddCardButton';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handlerClick = e => {
    e.preventDefault();

    this.props.history.push(e.target.getAttribute('href'));
  }

  handlerLogOut = e => {
    e.preventDefault();

    if (localStorage.hasOwnProperty('token')) {
      localStorage.removeItem('token');
    }
      this.props.handlerLogInState(false);
      
    if (this.props.location.pathname !== '/'){
      this.props.history.push('/');
    }
  }

  render() {
    console.log(this.props);
    
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">How To</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/" onClick={this.handlerClick}>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about/" onClick={this.handlerClick}>
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact/" onClick={this.handlerClick}>
                  Contact
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Account
                </DropdownToggle>
                <DropdownMenu right>
                  {
                    localStorage.hasOwnProperty('token') && this.props.loggedIn ?
                      (<DropdownItem>
                        <NavLink
                          href="/profile/"
                          onClick={this.handlerClick}
                          className="text-dark"
                        >
                        Profile
                        </NavLink>
                    </DropdownItem>) : null
                  }
                  {/* <DropdownItem divider /> */}
                  <DropdownItem>
                    {!localStorage.hasOwnProperty('token') && !this.props.loggedIn ? (
                      <NavLink
                        href="/login"
                        onClick={this.handlerClick}
                        className="text-dark"
                      >
                        Login
                      </NavLink>
                    ) : (
                      <NavLink
                        onClick={this.handlerLogOut}
                        className="text-dark"
                      >
                        Log Out
                      </NavLink>
                    )}
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        {
          //this.props.user_id ?
          localStorage.hasOwnProperty('token') ?
            <AddCardFloater><AddCardButton /></AddCardFloater>
          :
            null
        }
      </div>
    );
  }
}

const AddCardFloater = styled.div`
  position: fixed;
  z-index: 2;
  right: 30px;
  bottom: 30px;
`;