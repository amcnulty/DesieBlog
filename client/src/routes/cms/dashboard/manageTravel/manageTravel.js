import React from 'react';
import DashboardTabView from '../../../../components/dashboardTabView/dashboardTabView';
import CreateArticle from '../../../../components/createArticle/createArticle';
import articleData from '../../../../lib/dashboardTabViewData.json';
import './manageTravel.css';

const ManageTravel = props => {
  return (
    <div className="ManageBooks">
      <DashboardTabView>
        <CreateArticle articleAuthor={props.user.data.displayName} articleData={articleData.Travel}/>
        <span>Tab content 2</span>
        <span>Tab content 3</span>
      </DashboardTabView>
    </div>
  )
}

export default ManageTravel;
