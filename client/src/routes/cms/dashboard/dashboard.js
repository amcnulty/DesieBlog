import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { API } from '../../../util/api';
import './dashboard.css';

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
    API.userPresent((err, res) => {
      if (err) {
        if (res === 401) {
          this.props.history.push('/cms');
        }
        console.log(err);
      }
      this.setState({user: res});
    });
  }

  componentDidMount() {
  }

  logout = e => {
    API.logoutUser((err, status) => {
      if (status === 200) this.props.history.push('/cms');
    });
  }

  render() {

    return this.state.user ? (
      <div>
        <h1>Dashboard works!</h1>
        <button onClick={this.logout}>Logout</button>
      </div>
    )
    : <h1>Redirecting...</h1>;
  }
}

export default Dashboard;