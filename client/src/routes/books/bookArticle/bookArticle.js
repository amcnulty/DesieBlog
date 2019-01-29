import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import axios from 'axios';
import ArticleNavigator from '../../../components/articleNavigator/ArticleNavigator';
import './bookArticle.css';

class BookArticle extends Component {

  constructor(props) {
    super(props);
    this.state ={}
  }
  
  componentDidMount() {
    const { path }  = this.props.match.params;
    axios.get('/api/books/' + path)
    .then(res => {
      this.setState({
        article: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {

    return (
      this.state.article ? (
        <div className="BookArticle mx-md-5 mx-3 my-5">
          <Row>
            <ArticleNavigator/>
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
            <Col className="adSection" md="4" lg="3" xl="2"></Col>
          </Row>
        </div>
      ) : (
        <h1>Loading...</h1>
      )
    )
  }

}

export default BookArticle;