import React, { Component } from 'react';
import { API } from '../../util/api';
import ArticleList from '../articleList/articleList';
import UpdateArticleForm from '../updateArticleForm/updateArticleForm';
import './updateArticle.css';

class UpdateArticle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      articleSelected: false,
      articlesLoaded: false,
      selectedArticle: {}
    }
  }

  componentDidMount = () => {
    API.getArticlesByKind(this.props.articleData.kind, (err, articles) => {
      if (err) {
        console.log(err);
      }
      else {
        this.setState({
          articles: articles.data,
          articlesLoaded: true
        });
      }
    });
  }

  handleArticleSelect = id => {
    API.getArticleById(id, (err, res) => {
      if (err) {
        console.log(err);
      }
      else {
        console.log(res.data);
        this.setState({articleSelected: true, selectedArticle: res.data});
      }
    })
  }

  render() {
    return (
      <div className="UpdateArticle">
      {
        this.state.articleSelected
        ?
        <React.Fragment>
          <button className="btn btn-link" onClick={() => this.setState({articleSelected: false})}><i className="fas fa-arrow-left"></i> Return To List</button>
          <UpdateArticleForm
            article={this.state.selectedArticle}
            articleAuthor={this.props.articleAuthor}
            articleData={this.props.articleData}
          />
        </React.Fragment>
        :
          this.state.articlesLoaded
          ?
          <React.Fragment>
            <h1 className="text-center">Choose Article To Edit</h1>
            <ArticleList
              articles={this.state.articles}
              inEditor={true}
              onArticleSelect={this.handleArticleSelect}
            />
          </React.Fragment>
          :
          <div className="d-flex justify-content-center">
            <h3>Loading Images...</h3>
            <div className="spinner-grow text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
      }
      </div>
    )
  }
}

export default UpdateArticle;
