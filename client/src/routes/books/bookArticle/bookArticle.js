import React, { Component } from 'react';
import axios from 'axios';
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
        <div className="BookArticle">
          <h1>{this.state.article.title}</h1>
          <h3>Authors:</h3>
          {this.state.article.authors.map(author => {
            return <h4>{author}</h4>
          })}
          <h3>{this.state.article.date}</h3>
          <img src={this.state.article.bookImage} alt="Article Thumbnail"/>
          <div dangerouslySetInnerHTML={{ __html: this.state.article.body}}></div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )
    )
  }

}

export default BookArticle;