import React from 'react';
import DashboardTabView from '../../../../components/dashboardTabView/dashboardTabView';
import CreateArticle from '../../../../components/createArticle/createArticle';
import articleData from '../../../../lib/dashboardTabViewData.json';
import './manageWine.css';

const ManageWine = props => {
  return (
    <div className="ManageBooks">
      <DashboardTabView>
        <CreateArticle articleAuthor={props.user.data.displayName} articleData={articleData.Wine}/>
        <span>Tab content 2</span>
        <span>Tab content 3</span>
      </DashboardTabView>
    </div>
  )
}

export default ManageWine;
