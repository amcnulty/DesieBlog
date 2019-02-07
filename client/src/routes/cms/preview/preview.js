import React, { Component } from 'react';
import BookArticle from '../../../routes/books/bookArticle/bookArticle';
import RecipeArticle from '../../../routes/recipes/recipeArticle/recipeArticle';
import TravelArticle from '../../../routes/travel/travelArticle/travelArticle';
import WineArticle from '../../../routes/wine/wineArticle/wineArticle';
import './preview.css';

const articleMap = {
  book: <BookArticle />,
  recipes: <RecipeArticle />,
  travel: <TravelArticle />,
  wine: <WineArticle />
}

class Preview extends Component {

  componentWillMount() {
    this.setState({ articleData: JSON.parse(localStorage.getItem('articleData')) })
    this.setState({ type: localStorage.getItem('type')});
    localStorage.removeItem('articleData');
    localStorage.removeItem('type');
  }

  getArticleType = () => {
    articleMap[this.state.type].props = {
      article: this.state.articleData,
      preview: true
    };
    return articleMap[this.state.type];
  }

  render() {

    return (
      <div className="Preview">
        {this.getArticleType()}
      </div>
    )
  }
}

export default Preview;
