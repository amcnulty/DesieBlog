import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Nav, NavItem, Collapse, Navbar, NavbarToggler, NavbarBrand, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './dashboardNav.css';

class DashboardNav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      manageArticlesIsOpen: false,
      mobileNavbarIsOpen: false
    }
  }

  toggle = key => {
    this.setState({[key]: !this.state[key]});
  }

  checkIfActive = path => {
    return this.props.location.pathname === path;
  }

  render() {
    return (
      <React.Fragment>
        <div className="DashboardNavDesktop col-lg-2 col-md-3 d-md-block d-none p-0">
          <Nav vertical>
            <Link className="py-4" to={`${this.props.match.url}`}>
              <NavItem>
                Desie Blog Portal
              </NavItem>
            </Link>
            <a href="/" onClick={(e) => {e.preventDefault(); this.toggle('manageArticlesIsOpen');}}>
              <NavItem>
                <i className="fas fa-pencil-alt"></i> Manage Articles
              </NavItem>
            </a>
            <Collapse isOpen={this.state.manageArticlesIsOpen}>
              <Link to={`${this.props.match.url}/books`}>
                <NavItem className={this.checkIfActive('/cms/dashboard/books') ? 'active' : 'inactive'}>
                  Books
                </NavItem>
              </Link>
              <Link to={`${this.props.match.url}/wine`}>
                <NavItem className={this.checkIfActive('/cms/dashboard/wine') ? 'active' : 'inactive'}>
                  Wine
                </NavItem>
              </Link>
              <Link to={`${this.props.match.url}/travel`}>
                <NavItem className={this.checkIfActive('/cms/dashboard/travel') ? 'active' : 'inactive'}>
                  Travel
                </NavItem>
              </Link>
              <Link to={`${this.props.match.url}/recipes`}>
                <NavItem className={this.checkIfActive('/cms/dashboard/recipes') ? 'active' : 'inactive'}>
                  Recipes
                </NavItem>
              </Link>
            </Collapse>
            <Link to={`${this.props.match.url}/account-settings`}>
              <NavItem className={this.checkIfActive('/cms/dashboard/account-settings') ? 'active' : 'inactive'}>
                <i className="fas fa-cog"></i> Account Settings
              </NavItem>
            </Link>
            <Link to={`${this.props.match.url}/manage-images`}>
              <NavItem className={this.checkIfActive('/cms/dashboard/manage-images') ? 'active' : 'inactive'}>
                <i className="far fa-image"></i> Manage Images
              </NavItem>
            </Link>
          </Nav>
        </div>
        <div className="DashboardNavMobile col-12 px-0 d-md-none">
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/cms/dashboard">Desie Blog Poral</NavbarBrand>
            <NavbarToggler onClick={() => this.toggle('mobileNavbarIsOpen')} />
            <Collapse isOpen={this.state.mobileNavbarIsOpen} navbar>
              <Nav className="ml-auto" navbar>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                  <i className="fas fa-pencil-alt"></i> Manage Articles
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>
                      <NavLink href={`${this.props.match.url}/books`}>Books</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href={`${this.props.match.url}/wine`}>Wine</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href={`${this.props.match.url}/travel`}>Travel</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href={`${this.props.match.url}/recipes`}>Recipes</NavLink>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <NavLink href={`${this.props.match.url}/account-settings`}><i className="fas fa-cog"></i> Account Settings</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href={`${this.props.match.url}/manage-images`}><i className="far fa-image"></i> Manage Images</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </React.Fragment>
    )
  }

}

export default withRouter(DashboardNav);
