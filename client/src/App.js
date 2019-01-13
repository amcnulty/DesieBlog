import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import SiteHeader from './header/header';
import SiteFooter from './footer/footer';
import Home from './routes/home/home';
import Books from './routes/books/books';
import BookArticle from './routes/books/bookArticle/bookArticle';
import Portal from './routes/cms/portal/portal';
import Dashboard from './routes/cms/dashboard/dashboard';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
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
              path="/cms"
              component={Portal}
            />
            <Route
              exact
              path="/cms/dashboard"
              component={Dashboard}
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
