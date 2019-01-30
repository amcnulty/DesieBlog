import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import ArticleNavigator from '../../../components/articleNavigator/ArticleNavigator';
import { API } from '../../../util/api';
import './bookArticle.css';

class BookArticle extends Component {

  constructor(props) {
    super(props);
    this.state ={}
  }
  
  componentDidMount() {
    const { path } = this.props.match.params;
    let { url } = this.props.match;
    this.populateArticle(path);
    const listener = this.props.history.listen(() => {
      if (url !== this.props.history.location.pathname) {
        this.populateArticle(this.props.history.location.pathname.replace('/books/', ''));
        url = this.props.history.location.pathname;
      }
    });
    this.setState({listener: listener});
  }
  
  populateArticle(path) {
    API.getArticleByUrlTitle(path, (err, res) => {
      if (err) console.log(err);
      else {
        this.findAdjacentArticles(res.data);
        this.setState({
          article: res.data
        });
      }
    });
  }

  componentWillUnmount() {
    this.state.listener();
  }

  findAdjacentArticles(article) {
    API.findAdjacentArticles({
      kind: 'Book',
      currentArticle: article
    }, (err, res) => {
      if (err) console.log(err);
      else this.setState({adjacentArticles: res.data});
    });
  }

  render() {

    return (
      this.state.article ? (
        <div className="BookArticle mx-md-5 mx-3 my-5">
          <Row>
            <Col>
              { !!this.state.adjacentArticles ? <ArticleNavigator articles={this.state.adjacentArticles}/> : ''}
            </Col>
          </Row>
          <Row>
            <Col className="articleContent" md="8" lg="9" xl="10">
              <p>
                <small className="d-block"><strong>Written By:</strong> {this.state.article.author}</small>
                <small><strong>Published On:</strong> {new Date(this.state.article.date).toDateString()}</small>
              </p>
              <div className="text-center">
                <h1>{this.state.article.title}</h1>
                <h3>Authors:</h3>
                <ol className="list-unstyled">
                  {this.state.article.authors.map(author => {
                    return <li>{author}</li>
                  })}
                </ol>
                <img className="bookImage mb-5" src={this.state.article.bookImage} alt="Article Thumbnail"/>
              </div>
              <div dangerouslySetInnerHTML={{ __html: this.state.article.body}}></div>
            </Col>
            <Col md="4" lg="3" xl="2"></Col>
          </Row>
        </div>
      ) : (
        <h1>Loading...</h1>
      )
    )
  }

}

export default BookArticle;