import React from 'react';
import DashboardTabView from '../../../../components/dashboardTabView/dashboardTabView';
import ArticleEditor from '../../../../components/articleEditor/articleEditor';
import UpdateArticle from '../../../../components/updateArticle/updateArticle';
import articleData from '../../../../lib/dashboardTabViewData.json';
import './manageTravel.css';

const ManageTravel = props => {
  return (
    <div className="ManageTravel">
      <DashboardTabView>
        <ArticleEditor
          mode="create"
          articleAuthor={props.user.data.displayName}
          articleData={articleData.Travel}
        />
        <UpdateArticle
          articleAuthor={props.user.data.displayName}
          articleData={articleData.Travel}
        />
        <span>Tab content 3</span>
      </DashboardTabView>
    </div>
  )
}

export default ManageTravel;
