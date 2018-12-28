import React, { Component } from 'react';
import { Link, BrowserRouter as Router, withRouter } from 'react-router-dom';
import HeaderSearch from './headerSearch/headerSeach';
import './header.css';

class SiteHeader extends Component {

  componentDidMount() {

  }

  render() {
    
    return (
      <header className="SiteHeader mx-md-5">
        <nav className="d-flex">
          <Link to="/recipes">Recipes</Link>
          <Link to="/wine">Wine</Link>
          <Link to="/travel">Travel</Link>
          <Link to="/books">Books</Link>
        </nav>
        <HeaderSearch/>
      </header>
    )
  }
}

export default SiteHeader;