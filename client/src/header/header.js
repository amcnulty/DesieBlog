import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import HeaderSearch from './headerSearch/headerSeach';
import { Nav, NavItem, Collapse, Navbar, NavbarToggler, NavLink } from 'reactstrap';
import './header.css';

const headerInitialHeight = 190;
const headerInitialHeightMobile = 160;
const headerHeightDelta = 70;
const headerHeightDeltaMobile = 100;
const logoInitialHeight = 100;
const logoInitialHeightMobile = 80;
const logoHeightDelta = 55;
const logoHeightDeltaMobile = 35;
const logoTopInitial = 65;
const animationScrollRange = 300;

class SiteHeader extends Component {

  constructor(props) {
    super(props);
    if (window.innerWidth < 768) {
      this.state = {
        headerHeight: '160px',
        logoHeight: '80px',
        logoTop: '65px'
      }
    }
    else {
      this.state = {
        headerHeight: '190px',
        logoHeight: '100px',
        logoTop: '65px'
      }
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    let headerHeight;
    let headerDelta;
    let logoHeight;
    let logoDelta;
    let topDelta;
    if (window.innerWidth < 768) {
      headerHeight = headerInitialHeightMobile;
      headerDelta = headerHeightDeltaMobile;
      logoHeight = logoInitialHeightMobile;
      logoDelta = logoHeightDeltaMobile;
      topDelta = 55;
    }
    else {
      headerHeight = headerInitialHeight;
      headerDelta = headerHeightDelta;
      logoHeight = logoInitialHeight;
      logoDelta = logoHeightDelta;
      topDelta = 0;
    }
    if (window.pageYOffset < 301) {
      this.setState({
        headerHeight: `${headerHeight - (window.pageYOffset / animationScrollRange) * headerDelta}px`,
        logoHeight: `${logoHeight - (window.pageYOffset / animationScrollRange) * logoDelta}px`,
        logoTop: `${logoTopInitial - (window.pageYOffset / animationScrollRange) * topDelta}px`
      });
    }
    else {
      if (window.innerWidth < 768) {
        this.setState({
          headerHeight: headerHeight - headerDelta + 'px',
          logoHeight: logoHeight - logoDelta + 'px',
          logoTop: logoTopInitial - topDelta
        });
      }
      else {
        this.setState({
          headerHeight: headerHeight - headerDelta + 'px',
          logoHeight: logoHeight - logoDelta + 'px',
          logoTop: logoTopInitial + 'px'
        });
      }
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
      <header
        className="SiteHeader"
        style={{height: this.state.headerHeight}}
      >
        <Navbar light expand="md">
          <NavbarToggler onClick={() => this.toggle('mobileNavbarIsOpen')}/>
          <img
            className="desieBlogLogo"
            src="/res/images/DesieBlog_Logo.png"
            alt="DesieBlog"
            style={{height: this.state.logoHeight, top: this.state.logoTop}}
          />
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