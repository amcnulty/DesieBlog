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
    if (this.props.preview) this.setState({ article: this.props.article });
    else {
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
    if (!this.props.preview) {
      this.state.listener();
    }
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
        <div className="BookArticle mx-md-5 mx-4 my-5">
          <Row>
            <Col>
              { !!this.state.adjacentArticles ? <ArticleNavigator articles={this.state.adjacentArticles}/> : ''}
            </Col>
          </Row>
          <Row>
            <Col className="articleContent" md="8" lg="9" xl="10">
              <div>
                <h1>{this.state.article.title}</h1>
                <ol className="list-unstyled">
                  {this.state.article.authors.map(author => {
                    return <li key={author}>{author}</li>
                  })}
                </ol>
                <img className="bookImage mb-5" src={this.state.article.bookImage} alt="Article Thumbnail"/>
              </div>
              <div className="articleBody" dangerouslySetInnerHTML={{ __html: this.state.article.body}}></div>
              <p>
                <small>{new Date(this.state.article.date).toDateString()}</small>
              </p>
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