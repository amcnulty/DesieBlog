import React from 'react';
import ArticleThumbnail from '../../components/articleThumbnail/articleThumbnail';
import './articleList.css';

const ArticleList = props => {
  return (
    <div className="ArticleList mb-5">
      <div className="row">
        {
          props.articles.map(article => {
            return (
              <div className="col-12 col-md-6 col-lg-4 col-xl-3" key={article._id}>
                <ArticleThumbnail
                  id={article._id}
                  url={article.path}
                  thumbnailImage={article.thumbnailImage}
                  bannerText={article.bannerText}
                  inEditor={props.inEditor}
                  onSelect={props.onArticleSelect}
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
