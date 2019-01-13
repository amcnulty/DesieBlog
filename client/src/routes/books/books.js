import React, { Component } from 'react';
import ArticleThumbnail from '../../components/articleThumbnail/articleThumbnail';
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
    axios.get('/api/articles/Book')
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
        <div className="mx-md-5">
          <h1 className="desieBlogLogo">Desie Blog</h1>
            {
              this.state.articles.map(article => {
                return (
                  <ArticleThumbnail
                    url={article.path}
                    thumbnailImage={article.thumbnailImage}
                    bannerText={article.bannerText}
                  ></ArticleThumbnail>
                )
              })
            }
        </div>
      </div>
    )
  }
}

export default Books;