import React from 'react';
import ArticleThumbnail from '../../components/articleThumbnail/articleThumbnail';
import './articleList.css';

const ArticleList = props => {
  console.log('props.articles :', props.articles);
  return (
    <div className="ArticleList mb-5">
      <h1>Articles</h1>
      <div className="list">
        {
          props.articles.map(article => {
            return (
              <ArticleThumbnail
                url={article.path}
                thumbnailImage={article.thumbnailImage}
                bannerText={article.bannerText}
              ></ArticleThumbnail>
            );
          })
        }
      </div>
    </div>
  )
}

export default ArticleList;
