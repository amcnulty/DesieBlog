import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = props => {
  return (
    <div className="Home">
      <div className="mx-md-5 mx-4">
        <h1 className="desieBlogLogo">Desie Blog</h1>
        <div className="row justify-content-md-center">
          <div className="thumbnail-row col-md-7">
            <Link className="thumbnail" to="/recipes">
              <div className="thumbnail-banner noselect">
                Recipes
              </div>
            </Link>
            
            <Link className="thumbnail" to="/wine">
              <div className="thumbnail-banner noselect">
                Wine
              </div>
            </Link>
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="thumbnail-row col-md-7">
            <Link className="thumbnail" to="/travel">
              <div className="thumbnail-banner noselect">
                Travel
              </div>
            </Link>
            
            <Link className="thumbnail" to="/books">
              <div className="thumbnail-banner noselect">
                Books
              </div>
            </Link>
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

export default Home;