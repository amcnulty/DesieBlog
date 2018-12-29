import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HeaderSearch from './headerSearch/headerSeach';
import './header.css';

class SiteHeader extends Component {

  componentDidMount() {

  }

  render() {
    
    return (
      <header className="SiteHeader">
        <div className="mx-md-5">
          <nav className="d-flex">
            <Link to="/recipes">Recipes</Link>
            <Link to="/wine">Wine</Link>
            <Link to="/travel">Travel</Link>
            <Link to="/books">Books</Link>
          </nav>
          <HeaderSearch/>
        </div>
      </header>
    )
  }
}

export default SiteHeader;