import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { API } from '../../../util/api';
import Overview from '../dashboard/overview/overview';
import ManageBooks from '../dashboard/manageBooks/manageBooks';
import ManageRecipes from '../dashboard/manageRecipes/manageRecipes';
import ManageTravel from '../dashboard/manageTravel/manageTravel';
import ManageWine from '../dashboard/manageWine/manageWine';
import AccountSettings from '../dashboard/accountSettings/accountSettings';
import ManageImages from '../dashboard/manageImages/manageImages';
import ManageUsers from '../dashboard/manageUsers/manageUsers';
import DashboardNav from '../../../components/dashboardNav/dashboardNav';
import './dashboard.css';

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: false
    }
    API.userPresent((err, res) => {
      if (err) {
        if (err.response.status === 401) {
          this.props.history.push('/cms');
        }
        console.log(err);
      }
      this.setState({user: res.data});
    });
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
          <DashboardNav user={this.state.user}/>
          <div className="col-lg-10 col-md-9 col-12 pt-5 pt-md-0 rightContent">
            <Route path={`${this.props.match.path}/books`} render={props => <ManageBooks user={this.state.user} />}/>
            <Route path={`${this.props.match.path}/recipes`} render={props => <ManageRecipes user={this.state.user}/>} />
            <Route path={`${this.props.match.path}/travel`} render={props => <ManageTravel user={this.state.user}/>} />
            <Route path={`${this.props.match.path}/wine`} render={props => <ManageWine user={this.state.user}/>} />
            <Route path={`${this.props.match.path}/account-settings`} component={AccountSettings}/>
            <Route path={`${this.props.match.path}/manage-images`} component={ManageImages}/>
            <Route path={`${this.props.match.path}/manage-users`} render={props => <ManageUsers user={this.state.user}/>} />
            <Route exact path={this.props.match.path} render={props => <Overview user={this.state.user}/>} /> 
          </div>
        </div>
      </div>
    )
    : <h1>Redirecting...</h1>;
  }
}

export default Dashboard;
