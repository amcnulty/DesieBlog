import React, {Component} from 'react';
import './home.css';

class Home extends Component {

  render() {
    
    return (
      <div className="Home">
        <div className="mx-md-5">
          <h1 className="desieBlogLogo">Desie Blog</h1>
          <div className="row justify-content-md-center">
            <div className="thumbnail-row col-md-7">
              <div className="thumbnail">
                <div className="thumbnail-banner noselect">
                  Recipes
                </div>
              </div>
              
              <div className="thumbnail">
                <div className="thumbnail-banner noselect">
                  Wine
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-md-center">
            <div className="thumbnail-row col-md-7">
              <div className="thumbnail">
                <div className="thumbnail-banner noselect">
                  Travel
                </div>
              </div>
              
              <div className="thumbnail">
                <div className="thumbnail-banner noselect">
                  Books
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          Contact us: desiedog@gmail.com
          <p>Social Media Links</p>
        </footer>
      </div>
    )
  }
}

export default Home;