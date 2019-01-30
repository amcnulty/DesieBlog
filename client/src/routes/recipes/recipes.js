import React, { Component } from 'react';
import ArticleList from '../../components/articleList/articleList';
import { API } from '../../util/api';
import './recipes.css';

class Recipes extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    API.getArticlesByKind('Recipe', (err, res) => {
      if (err) console.log(err);
      else {
        this.setState({
          articles: res.data
        });
      }
    });
  }

  render() {
    return (
      <div className="Recipes">
        <div className="mx-md-5 mx-3">
          <ArticleList articles={this.state.articles}/>
        </div>
      </div>
    )
  }

}

export default Recipes;
