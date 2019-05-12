import React from 'react';
import './home.css';

const Home = props => {
  return (
    <div className="Home">
      <div className="mx-md-5 mx-4">
        <div className="row justify-content-center mt-3">
          <div className="d-flex flex-column align-items-center">
            <div className="logoWrapper w-50">
              <img
                className="w-100"
                src="/res/images/DesieBlog_Logo.png"
                />
            </div>
            <div className="homePicture">
              <img
                className="w-100"
                src="/res/images/homePicture.jpg"
                />
            </div>
            <div className="aboutBox w-75 d-md-flex flex-column justify-content-between align-items-center py-4 px-5 d-none">
              <h2>ABOUT DESIE BLOG</h2>
              <p className="small px-md-4 mx-md-4 px-1 mx-1 aboutBlurb text-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, sapiente commodi. Dolorem quas quod, accusantium ipsum, obcaecati ea nobis temporibus veniam consequuntur odit itaque dolorum animi ratione. Fuga
              </p>
              <button className="btn btn-danger">CONTINUE READING</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;