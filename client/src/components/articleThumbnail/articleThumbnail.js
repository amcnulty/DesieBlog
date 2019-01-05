import React, { Component } from 'react';
import './articleThumbnail.css';

class ArticleThumbnail extends Component {
  
  componentDidMount() {

  }

  toBackgroundUrl(url) {
    return `url("${url}")`;
  }

  render() {

    return (
      <div className="ArticleThumbnail">
        <a href={this.props.url}>
          <div className="thumbnail" style={{backgroundImage: this.toBackgroundUrl(this.props.thumbnailImage)}}>
            <div className="banner" title={this.props.bannerText}>
              {this.props.bannerText}
            </div>
          </div>
        </a>
      </div>
    )
  }
}

export default ArticleThumbnail;