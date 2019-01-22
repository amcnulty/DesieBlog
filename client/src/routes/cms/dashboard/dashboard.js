import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { API } from '../../../util/api';
import Overview from '../dashboard/overview/overview';
import ManageBooks from '../dashboard/manageBooks/manageBooks';
import ManageRecipes from '../dashboard/manageRecipes/manageRecipes';
import ManageTravel from '../dashboard/manageTravel/manageTravel';
import ManageWine from '../dashboard/manageWine/manageWine';
import AccountSettings from '../dashboard/accountSettings/accountSettings';
import DashboardNav from '../../../components/dashboardNav/dashboardNav';
import './dashboard.css';

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: true
    }
    // API.userPresent((err, res) => {
    //   if (err) {
    //     if (res === 401) {
    //       this.props.history.push('/cms');
    //     }
    //     console.log(err);
    //   }
    //   this.setState({user: res});
    // });
  }

  componentDidMount() {}

  logout = e => {
    API.logoutUser((err, status) => {
      if (status === 200) this.props.history.push('/cms');
    });
  }

  render() {
    return this.state.user ? (
      <div className="Dashboard container-fluid">
        <div className="row">
          <DashboardNav/>
          <div className="col-lg-10 col-md-9 col-12 rightContent">
            <Route path={`${this.props.match.path}/books`} component={ManageBooks}/>
            <Route path={`${this.props.match.path}/recipes`} component={ManageRecipes}/>
            <Route path={`${this.props.match.path}/travel`} component={ManageTravel}/>
            <Route path={`${this.props.match.path}/wine`} component={ManageWine}/>
            <Route path={`${this.props.match.path}/account-settings`} component={AccountSettings}/>
            <Route exact path={this.props.match.path} component={Overview}/>
          </div>
        </div>
      </div>
    )
    : <h1>Redirecting...</h1>;
  }
}

export default Dashboard;
