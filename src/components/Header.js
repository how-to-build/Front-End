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

    console.log(e.target)

    this.props.history.push(e.target.getAttribute('href'));
  }

  render() {
    return (
      <div>
        <Navbar className="navbar-dark bg-dark" expand="md">
          <NavbarBrand href="/">How To</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  href="/"
                  onClick={this.handlerClick}
                >Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="/about/"
                  onClick={this.handlerClick}
                >About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="/contact/"
                  onClick={this.handlerClick}
                >Contact</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Account
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    {
                      !this.props.loggedIn ?
                        <NavLink
                          href="/login"
                          onClick={this.handlerClick}
                          className="text-dark"
                        >Login</NavLink>
                      :
                        <NavLink
                          onClick={this.handlerLogOut}
                          className="text-dark"
                        >Log Out</NavLink>
                    }
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
