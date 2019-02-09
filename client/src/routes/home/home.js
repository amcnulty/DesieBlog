import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = props => {
  return (
    <div className="Home">
      <div className="mx-md-5 mx-4">
        <h1 className="desieBlogLogo">Desie Blog</h1>

        <div className="row">
          <div className="col col-sm-10 offset-sm-1 col-lg-10 offset-lg-1 col-xl-10 offset-xl-1">
            <div className="row">
              <div className="col-12 col-lg-6 col-xl-4 px-4">
                <Link className="thumbnail my-3 mx-auto recipes" to="/recipes">
                  <div className="thumbnail-banner noselect">
                    Recipes
                  </div>
                </Link>
              </div>
              <div className="col-12 col-lg-6 col-xl-4 px-4">
                <Link className="thumbnail my-3 mx-auto wine" to="/wine">
                  <div className="thumbnail-banner noselect">
                    Wine
                  </div>
                </Link>
              </div>
              <div className="col-12 col-lg-6 col-xl-4 px-4">
                <Link className="thumbnail my-3 mx-auto travel" to="/travel">
                  <div className="thumbnail-banner noselect">
                    Travel
                  </div>
                </Link>
              </div>
              <div className="col-12 col-lg-6 col-xl-4 px-4">
                <Link className="thumbnail my-3 mx-auto books" to="/books">
                  <div className="thumbnail-banner noselect">
                    Books
                  </div>
                </Link>
              </div>
            </div>
            </div>
          </div>






        {/* <div className="row">
          <Link className="thumbnail ml-auto mr-4 recipes" to="/recipes">
            <div className="thumbnail-banner noselect">
              Recipes
            </div>
          </Link>
          <Link className="thumbnail mr-auto ml-4 wine" to="/wine">
            <div className="thumbnail-banner noselect">
              Wine
            </div>
          </Link>
        </div>
        <div className="row">
          <Link className="thumbnail ml-auto mr-4 mt-5 travel" to="/travel">
            <div className="thumbnail-banner noselect">
              Travel
            </div>
          </Link>
          <Link className="thumbnail mr-auto ml-4 mt-5 books" to="/books">
            <div className="thumbnail-banner noselect">
              Books
            </div>
          </Link>
        </div> */}
      </div>
      <footer>
        Contact us: <a href="mailto:desieblog@gmail.com">desieblog@gmail.com</a>
      </footer>
    </div>
  )
}

export default Home;