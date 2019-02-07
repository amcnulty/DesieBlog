import React from 'react';
import ArticleThumbnail from '../../components/articleThumbnail/articleThumbnail';
import './articleList.css';

const ArticleList = props => {
  return (
    <div className="ArticleList mb-5">
      <h1>Articles</h1>
      <div className="row">
        {
          props.articles.map(article => {
            return (
              <div className="col-12 col-md-6 col-lg-4 col-xl-3" key={article._id}>
                <ArticleThumbnail
                  url={article.path}
                  thumbnailImage={article.thumbnailImage}
                  bannerText={article.bannerText}
                ></ArticleThumbnail>
              </div>
            );
          })
        }
      </div>
    </div>
  )
}

export default ArticleList;
