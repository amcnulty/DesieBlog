import React from 'react';
import './headerSearch.css';

const HeaderSearch = props => {

  return (
    <form className="HeaderSearch">
      <input type="text" placeholder="Search..." name="search" id="searchInput"/>
      <button type="submit" className="db-button"><i className="fa fa-search"></i></button>
    </form>
  )
}

export default HeaderSearch;