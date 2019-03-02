import React, { Component } from 'react';
import ArticleList from '../../components/articleList/articleList';
import { API } from '../../util/api';
import './recipes.css';
import AdComponent from '../../components/adComponent/adComponent';

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
          articles: res.data.reverse()
        });
      }
    });
  }

  render() {
    return (
      <div className="Recipes">
        <AdComponent/>
        <div className="mx-md-5 mx-4">
          <ArticleList articles={this.state.articles}/>
        </div>
      </div>
    )
  }

}

export default Recipes;
