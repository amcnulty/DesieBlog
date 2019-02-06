import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactGA from 'react-ga';
import './App.css';
import GoogleAnalytics from './components/googleAnalytics/googleAnalytics';
import SiteHeader from './header/header';
import SiteFooter from './footer/footer';
import Home from './routes/home/home';
import Books from './routes/books/books';
import BookArticle from './routes/books/bookArticle/bookArticle';
import Recipes from './routes/recipes/recipes';
import RecipeArticle from './routes/recipes/recipeArticle/recipeArticle';
import Travel from './routes/travel/travel';
import TravelArticle from './routes/travel/travelArticle/travelArticle';
import Wine from './routes/wine/wine';
import WineArticle from './routes/wine/wineArticle/wineArticle';
import Portal from './routes/cms/portal/portal';
import Dashboard from './routes/cms/dashboard/dashboard';
import Preview from './routes/cms/preview/preview';

ReactGA.initialize('UA-133762520-1');
ReactGA.pageview('/book-list');

class App extends Component {
  
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  componentWillUnmount() {
    this.state.listener();
  }

  render() {
    return (
      <Router>
        <div className="App">
            <Route
              pattern="/" component={GoogleAnalytics}
            />
            <Route
              path="/"
              render={props => (!props.location.pathname.startsWith("/cms")) && <SiteHeader/>}
            />
            <Route
              exact
              path="/"
              component={Home}
            />
            <Route
              exact
              path="/books"
              component={Books}
            />
            <Route
              path="/books/:path"
              component={BookArticle}
            />
            <Route
              exact
              path="/recipes"
              component={Recipes}
            />
            <Route
              exact
              path="/recipes/:path"
              component={RecipeArticle}
            />
            <Route
              exact
              path="/travel"
              component={Travel}
            />
            <Route
              exact
              path="/travel/:path"
              component={TravelArticle}
            />
            <Route
              exact
              path="/wine"
              component={Wine}
            />
            <Route
              exact
              path="/wine/:path"
              component={WineArticle}
            />
            <Route
              exact
              path="/cms"
              component={Portal}
            />
            <Route
              path="/cms/dashboard"
              component={Dashboard}
            />
            <Route
              path="/cms/preview"
              component={Preview}
            />
            <Route
              path="/"
              render={props => (!props.location.pathname.startsWith("/cms")) && <SiteFooter/>}
            />
        </div>
      </Router>
    )
  }
}

export default App;
