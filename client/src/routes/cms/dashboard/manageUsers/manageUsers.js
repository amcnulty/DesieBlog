import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './manageUsers.sass';
import CreateUserForm from '../../../../components/createUserForm/createUserForm';

class ManageUsers extends Component {

  constructor(props) {
    super(props);
    if (!this.props.user.isAdmin) {
      this.props.history.push('/cms/dashboard');
    }
  }

  render() {
    return (
      <div className="my-4">
        <h1>Manage Users</h1>
        <CreateUserForm/>
      </div>
    )
  }
}

export default withRouter(ManageUsers);
