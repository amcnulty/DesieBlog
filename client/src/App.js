import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import SiteHeader from './header/header';
import SiteFooter from './footer/footer';
import Home from './routes/home/home';
import Books from './routes/books/books';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <SiteHeader/>
          <Switch>
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
          </Switch>
          <SiteFooter/>
        </div>
      </Router>
    )
  }
}

export default App;
