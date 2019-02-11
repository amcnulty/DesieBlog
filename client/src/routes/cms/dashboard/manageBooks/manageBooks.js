import React from 'react';
import DashboardTabView from '../../../../components/dashboardTabView/dashboardTabView';
import ArticleEditor from '../../../../components/articleEditor/articleEditor';
import UpdateArticle from '../../../../components/updateArticle/updateArticle';
import articleData from '../../../../lib/dashboardTabViewData.json';
import './manageBooks.css';

const ManageBooks = props => {
  return (
    <div className="ManageBooks">
      <DashboardTabView>
        <ArticleEditor
          mode="create"
          articleAuthor={props.user.data.displayName}
          articleData={articleData.Books}
        />
        <UpdateArticle
          articleAuthor={props.user.data.displayName}
          articleData={articleData.Books}
        />
        <span>Tab content 3</span>
      </DashboardTabView>
    </div>
  )
}

export default ManageBooks;
