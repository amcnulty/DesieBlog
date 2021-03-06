import React from 'react';
import DashboardTabView from '../../../../components/dashboardTabView/dashboardTabView';
import ArticleEditor from '../../../../components/articleEditor/articleEditor';
import UpdateArticle from '../../../../components/updateArticle/updateArticle';
import articleData from '../../../../lib/dashboardTabViewData.json';
import DeleteArticle from '../../../../components/deleteArticle/deleteArticle';
import './manageTravel.css';

const ManageTravel = props => {
  return (
    <div className="ManageTravel">
      <DashboardTabView>
        <ArticleEditor
          mode="create"
          articleAuthor={props.user}
          articleData={articleData.Travel}
        />
        <UpdateArticle
          articleAuthor={props.user}
          articleData={articleData.Travel}
        />
        <DeleteArticle
          articleAuthor={props.user}
          kind="Travel"
        />
      </DashboardTabView>
    </div>
  )
}

export default ManageTravel;
