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

    this.props.history.push(e.target.getAttribute("href"));
  };

  handlerLogOut = e => {
    e.preventDefault();

    if (localStorage.hasOwnProperty("token")) {
      localStorage.removeItem("token");
    }
    
    this.props.handlerLogInState(false);
      
    if (this.props.location.pathname !== '/'){
      this.props.history.push('/');
    }
  };

  render() {    
    return (
      <div>
        <Navbar color="info" dark expand="md">
          <NavbarBrand href="/" className="d-flex align-items-center">
            <img src="/assets/how-to-logo.png" alt="How To logo" width="60px"/>
            <div className="ml-2">
              How To
            </div>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/" onClick={this.handlerClick} className="text-light">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about/" onClick={this.handlerClick} className="text-light">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact/" onClick={this.handlerClick} className="text-light">
                  Contact
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className="text-light">
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
      </div>
    );
  }
}
