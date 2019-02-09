import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './ArticleNavigator.css';

const ArticleNavigator = props => {
  return (
    <div className="ArticleNavigator w-100 mb-5 d-flex justify-content-between">
      <Link to={props.articles.previous.path}>&lsaquo; Previous Article</Link>
      <Link to={props.articles.next.path}>Next Article &rsaquo;</Link>
    </div>
  )
}

export default withRouter(ArticleNavigator);
