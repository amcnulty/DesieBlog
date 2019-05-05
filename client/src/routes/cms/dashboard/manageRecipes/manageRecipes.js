import React from 'react';
import DashboardTabView from '../../../../components/dashboardTabView/dashboardTabView';
import ArticleEditor from '../../../../components/articleEditor/articleEditor';
import UpdateArticle from '../../../../components/updateArticle/updateArticle';
import articleData from '../../../../lib/dashboardTabViewData.json';
import './manageRecipes.css';
import DeleteArticle from '../../../../components/deleteArticle/deleteArticle';

const ManageRecipes = props => {
  return (
    <div className="ManageRecipes">
      <DashboardTabView>
        <ArticleEditor
          mode="create"
          articleAuthor={props.user.displayName}
          articleData={articleData.Recipes}
        />
        <UpdateArticle
          articleAuthor={props.user.displayName}
          articleData={articleData.Recipes}
        />
        <DeleteArticle
          kind="Recipe"
        />
      </DashboardTabView>
    </div>
  )
}

export default ManageRecipes;
