import React from 'react';
import './articleThumbnail.css';

const ArticleThumbnail = props => {
  const toBackgroundUrl = url => {
    if (!url || url === '') return `url("/res/images/default.png")`;
    else return `url("${url}")`;
  }

  const handleClick = event => {
    event.preventDefault();
    props.onSelect(props.id);
  }

  const url = props.inEditor ? 'javascript.void(0);' : props.url;

  return (
    <div className="ArticleThumbnail">
      <a href={url} onClick={event => props.inEditor ? handleClick(event) : console.log('going to article')}>
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
