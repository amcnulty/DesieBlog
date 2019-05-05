import React from 'react';
import DashboardTabView from '../../../../components/dashboardTabView/dashboardTabView';
import ArticleEditor from '../../../../components/articleEditor/articleEditor';
import UpdateArticle from '../../../../components/updateArticle/updateArticle';
import articleData from '../../../../lib/dashboardTabViewData.json';
import DeleteArticle from '../../../../components/deleteArticle/deleteArticle';
import './manageWine.css';

const ManageWine = props => {
  return (
    <div className="ManageWine">
      <DashboardTabView>
        <ArticleEditor
          mode="create"
          articleAuthor={props.user.displayName}
          articleData={articleData.Wine}
        />
        <UpdateArticle
          articleAuthor={props.user.displayName}
          articleData={articleData.Wine}
        />
        <DeleteArticle
          kind="Wine"
        />
      </DashboardTabView>
    </div>
  )
}

export default ManageWine;
