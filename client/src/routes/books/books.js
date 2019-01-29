import React, { Component } from 'react';
import ArticleList from '../../components/articleList/articleList';
import axios from 'axios';
import './books.css';

class Books extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    axios.get('/api/articles?kind=Book')
    .then(res => {
      this.setState({
        articles: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div className="Books">
        <div className="mx-md-5 mx-3">
          <ArticleList articles={this.state.articles}/>
        </div>
      </div>
    )
  }
}

export default Books;