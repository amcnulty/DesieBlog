import React, { Component } from 'react';
import './footer.css';

class SiteFooter extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }
  
  toggle = key => {
    this.setState({[key]: !this.state[key]});
  }

  render() {

    return (
      <div className="SiteFooter">

        <div className="subscribe mx-md-3 mx-4">
          <div className="d-none d-md-flex w-100">
            <p>Subscribe to receive content straight to your email!</p>
            <form id="subscribeForm">
              <input type="email" size="32" placeholder="Email"/>
              <button className="btn btn-primary ml-2" type="submit">SUBSCRIBE</button>
            </form>
          </div>
          <div className="d-flex d-md-none w-100 mobileFooter justify-content-center align-items-center">
            <a href="/" role="button" className="btn btn-link subscribeButton">
              <i className="far fa-envelope"></i>&nbsp;&nbsp;&nbsp;Subscribe Today!
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default SiteFooter;