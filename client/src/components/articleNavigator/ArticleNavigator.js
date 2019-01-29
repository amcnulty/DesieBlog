import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './articleNavigator.css';

const ArticleNavigator = props => {
  return (
    <div className="ArticleNavigator w-100 d-flex justify-content-between">
      <Link to={props.articles.previous.path}>&lsaquo; {props.articles.previous.title}</Link>
      <Link to={props.articles.next.path}>{props.articles.next.title} &rsaquo;</Link>
    </div>
  )
}

export default withRouter(ArticleNavigator);
