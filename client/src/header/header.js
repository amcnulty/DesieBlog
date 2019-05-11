import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import HeaderSearch from './headerSearch/headerSeach';
import { Nav, NavItem, Collapse, Navbar, NavbarToggler, NavLink } from 'reactstrap';
import './header.css';

class SiteHeader extends Component {

  constructor(props) {
    super(props);
      this.state = {}
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
              <NavItem>
                <NavLink className={this.checkIfActive('/') ? 'active' : ''} href="/">
                  HOME
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={this.checkIfActive('/contact-us') ? 'active' : ''} href="/about">
                  ABOUT
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={this.checkIfActive('/recipes') ? 'active' : ''} href="/recipes">
                  RECIPES
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={this.checkIfActive('/travel') ? 'active' : ''} href="/travel">
                  TRAVEL
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={this.checkIfActive('/wine') ? 'active' : ''} href="/wine">
                  WINE
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={this.checkIfActive('/books') ? 'active' : ''} href="/books">
                  BOOKS
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          <NavLink className="pintrestIcon ml-auto" href="https://www.pinterest.com/desieblog/" target="_blank">
            <i className="fab fa-pinterest"></i>
          </NavLink>
          <HeaderSearch/>
        </Navbar>
      </header>
    )
  }
}

export default withRouter(SiteHeader);