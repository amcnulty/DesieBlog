import React, {Component} from 'react';
import DashboardTabView from '../../../../components/dashboardTabView/dashboardTabView';
import CreateArticle from '../../../../components/createArticle/createArticle';
import articleData from '../../../../lib/dashboardTabViewData.json';
import './manageBooks.css';

class ManageBooks extends Component {

  render() {

    return (
      <div className="ManageBooks">
        <DashboardTabView>
          <CreateArticle articleData={articleData.Books}/>
          <span>Tab content 2</span>
          <span>Tab content 3</span>
        </DashboardTabView>
      </div>
    )
  }
}

export default ManageBooks;
