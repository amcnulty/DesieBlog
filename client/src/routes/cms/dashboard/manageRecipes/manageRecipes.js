import React from 'react';
import DashboardTabView from '../../../../components/dashboardTabView/dashboardTabView';
import ArticleEditor from '../../../../components/articleEditor/articleEditor';
import UpdateArticle from '../../../../components/updateArticle/updateArticle';
import articleData from '../../../../lib/dashboardTabViewData.json';
import './manageRecipes.css';

const ManageRecipes = props => {
  return (
    <div className="ManageRecipes">
      <DashboardTabView>
        <ArticleEditor
          mode="create"
          articleAuthor={props.user.data.displayName}
          articleData={articleData.Recipes}
        />
        <UpdateArticle
          articleAuthor={props.user.data.displayName}
          articleData={articleData.Recipes}
        />
        <span>Tab content 3</span>
      </DashboardTabView>
    </div>
  )
}

export default ManageRecipes;
