import React from 'react';
import DashboardTabView from '../../../../components/dashboardTabView/dashboardTabView';
import ArticleEditor from '../../../../components/articleEditor/articleEditor';
import UpdateArticle from '../../../../components/updateArticle/updateArticle';
import articleData from '../../../../lib/dashboardTabViewData.json';
import './manageBooks.css';
import DeleteArticle from '../../../../components/deleteArticle/deleteArticle';

const ManageBooks = props => {
  return (
    <div className="ManageBooks">
      <DashboardTabView>
        <ArticleEditor
          mode="create"
          articleAuthor={props.user.displayName}
          articleData={articleData.Books}
        />
        <UpdateArticle
          articleAuthor={props.user.displayName}
          articleData={articleData.Books}
        />
        <DeleteArticle
          kind="Book"
        />
      </DashboardTabView>
    </div>
  )
}

export default ManageBooks;
