import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import SiteHeader from './header/header';
import SiteFooter from './footer/footer';
import Home from './routes/home/home';
import Books from './routes/books/books';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia at dolores veniam maiores quae, laboriosam consectetur, autem optio molestiae vitae odit ipsa quia. Nisi fugiat repudiandae maiores distinctio? Commodi cum beatae autem ab placeat necessitatibus alias accusantium explicabo esse iste!
        </p>
        <SiteHeader/>
        <Router>
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
        </Router>
        <SiteFooter/>
      </div>
    );
  }
}

export default App;
