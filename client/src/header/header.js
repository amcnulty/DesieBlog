import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import HeaderSearch from './headerSearch/headerSeach';
import './header.css';

class SiteHeader extends Component {

  componentDidMount() {

  }

  checkIfActive = path => {
    return this.props.location.pathname === path;
  }

  render() {
    
    return (
      <header className="SiteHeader">
        <div className="mx-md-5 mx-3">
          <nav className="d-flex">
            <Link className={this.checkIfActive('/recipes') ? 'active' : ''} to="/recipes">Recipes</Link>
            <Link className={this.checkIfActive('/wine') ? 'active' : ''} to="/wine">Wine</Link>
            <Link className={this.checkIfActive('/travel') ? 'active' : ''} to="/travel">Travel</Link>
            <Link className={this.checkIfActive('/books') ? 'active' : ''} to="/books">Books</Link>
          </nav>
          <HeaderSearch/>
        </div>
      </header>
    )
  }
}

export default withRouter(SiteHeader);