import React from 'react';
import './articleThumbnail.css';

const ArticleThumbnail = props => {
  const toBackgroundUrl = url => `url("${url}")`;

  return (
    <div className="ArticleThumbnail">
      <a href={props.url}>
        <div className="thumbnail my-4 mx-auto" style={{backgroundImage: toBackgroundUrl(props.thumbnailImage)}}>
          <div className="banner" title={props.bannerText}>
            {props.bannerText}
          </div>
        </div>
      </a>
    </div>
  )
}

export default ArticleThumbnail;
