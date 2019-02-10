import React from 'react';
import DashboardTabView from '../../../../components/dashboardTabView/dashboardTabView';
import CreateArticle from '../../../../components/createArticle/createArticle';
import UpdateArticle from '../../../../components/updateArticle/updateArticle';
import articleData from '../../../../lib/dashboardTabViewData.json';
import './manageBooks.css';

const ManageBooks = props => {
  return (
    <div className="ManageBooks">
      <DashboardTabView>
        <CreateArticle articleAuthor={props.user.data.displayName} articleData={articleData.Books}/>
        <UpdateArticle articleData={articleData.Books} />
        <span>Tab content 3</span>
      </DashboardTabView>
    </div>
  )
}

export default ManageBooks;
