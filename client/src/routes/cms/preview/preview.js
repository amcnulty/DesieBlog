import React, { Component } from 'react';
import BookArticle from '../../../routes/books/bookArticle/bookArticle';
import RecipeArticle from '../../../routes/recipes/recipeArticle/recipeArticle';
import TravelArticle from '../../../routes/travel/travelArticle/travelArticle';
import WineArticle from '../../../routes/wine/wineArticle/wineArticle';
import './preview.css';

class Preview extends Component {

  componentWillMount() {
    this.setState({ articleData: JSON.parse(localStorage.getItem('articleData')) })
    this.setState({ type: localStorage.getItem('type')});
    localStorage.removeItem('articleData');
    localStorage.removeItem('type');
  }

  getArticleType = () => {
    switch (this.state.type) {
      case 'book':
        return <BookArticle
          article={this.state.articleData}
          preview={true}
        />
      case 'recipes':
        return <RecipeArticle
          article={this.state.articleData}
          preview={true}
        />
      case 'travel':
        return <TravelArticle
          article={this.state.articleData}
          preview={true}
        />
      case 'wine':
        return <WineArticle
          article={this.state.articleData}
          preview={true}
        />
      default:
        return <h1>Something went terribly wrong...</h1>
    }
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
