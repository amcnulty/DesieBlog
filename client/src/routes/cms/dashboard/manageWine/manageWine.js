import React from 'react';
import DashboardTabView from '../../../../components/dashboardTabView/dashboardTabView';
import ArticleEditor from '../../../../components/articleEditor/articleEditor';
import UpdateArticle from '../../../../components/updateArticle/updateArticle';
import articleData from '../../../../lib/dashboardTabViewData.json';
import './manageWine.css';

const ManageWine = props => {
  return (
    <div className="ManageWine">
      <DashboardTabView>
        <ArticleEditor
          mode="create"
          articleAuthor={props.user.data.displayName}
          articleData={articleData.Wine}
        />
        <UpdateArticle
          articleAuthor={props.user.data.displayName}
          articleData={articleData.Wine}
        />
        <span>Tab content 3</span>
      </DashboardTabView>
    </div>
  )
}

export default ManageWine;
