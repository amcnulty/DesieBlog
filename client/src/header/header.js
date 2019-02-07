import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import HeaderSearch from './headerSearch/headerSeach';
import { Nav, NavItem, Collapse, Navbar, NavbarToggler, NavLink } from 'reactstrap';
import './header.css';

class SiteHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  checkIfActive = path => {
    return this.props.location.pathname === path;
  }

  toggle = key => {
    this.setState({[key]: !this.state[key]});
  }

  render() {
    
    return (
      <header className="SiteHeader">
        <Navbar light expand="md">
          <NavbarToggler onClick={() => this.toggle('mobileNavbarIsOpen')}/>
          <Collapse isOpen={this.state.mobileNavbarIsOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem className="mr-auto">
                <NavLink className={this.checkIfActive('/recipes') ? 'active' : ''} href="/recipes">
                  Recipes
                </NavLink>
              </NavItem>
              <NavItem className="mr-auto">
                <NavLink className={this.checkIfActive('/wine') ? 'active' : ''} href="/wine">
                  Wine
                </NavLink>
              </NavItem>
              <NavItem className="mr-auto">
                <NavLink className={this.checkIfActive('/travel') ? 'active' : ''} href="/travel">
                  Travel
                </NavLink>
              </NavItem>
              <NavItem className="mr-auto">
                <NavLink className={this.checkIfActive('/books') ? 'active' : ''} href="/books">
                  Books
                </NavLink>
              </NavItem>
            </Nav>
            <HeaderSearch/>
          </Collapse>
        </Navbar>
      </header>
    )
  }
}

export default withRouter(SiteHeader);