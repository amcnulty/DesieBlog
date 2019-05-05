import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './manageUsers.sass';
import CreateUserForm from '../../../../components/createUserForm/createUserForm';
import UserList from '../../../../components/userList/userList';
import { API } from '../../../../util/api';

class ManageUsers extends Component {

  constructor(props) {
    super(props);
    this.state = {}
    if (!this.props.user.isAdmin) {
      this.props.history.push('/cms/dashboard');
    }
  }

  componentDidMount = () => {
    this.getUsers();
  }
  
  getUsers = () => {
    API.getAllUsers((err, res) => {
      if (err) {
        console.log(err);
      }
      else {
        this.setState({users: res.data})
      }
    });
  }

  render() {
    return (
      <div className="my-4">
        <h1>Manage Users</h1>
        <UserList
          users={this.state.users}
          refresh={this.getUsers}  
        />
        <CreateUserForm
          refresh={this.getUsers}
        />
      </div>
    )
  }
}

export default withRouter(ManageUsers);
