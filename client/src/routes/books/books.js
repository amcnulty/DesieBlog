import React, { Component } from 'react';
import './books.css';

class Books extends Component {

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return <h1>Books Works!!</h1>
  }
}

export default Books;