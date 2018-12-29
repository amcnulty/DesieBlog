import React, { Component } from 'react';
import './footer.css';

class SiteFooter extends Component {

  render() {

    return (
      <div className="SiteFooter">
        <div className="subscribe mx-md-5">
          <p>subscribe to receive content straight to your email</p>
          <form id="subscribeForm">
            <input type="email" size="50" placeholder="Email"/>
            <button className="btn btn-primary ml-2" type="submit">SUBSCRIBE</button>
          </form>
        </div>
      </div>
    )
  }
}

export default SiteFooter;