import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button, FormFeedback } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import './createUserForm.sass';
import { API } from '../../util/api';

class CreateUserForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isAdmin: false
    }
  }

  handleCheckChange = e => {
    this.setState({
      [e.target.id]: e.target.checked
    });
  }

  handleChange = e => {
    const { id, value } = e.target;

    this.setState({
      [id]: value
    });
  }

  handleFormSubmit = e => {
    e.preventDefault();
    this.setState({
      usernameInvalid: false,
      displayNameInvalid: false,
      passwordInvalid: false
    });
    if (this.state.username) {
      if (!this.state.username.trim()) {
        this.setState({usernameInvalid: true, usernameFeedback: 'Please enter username!!'});
      }
    }
    else if (!this.state.username) {
      this.setState({usernameInvalid: true, usernameFeedback: 'Please enter username!!'});
    }
    if (this.state.displayName) {
      if (!this.state.displayName.trim()) {
        this.setState({displayNameInvalid: true, displayNameFeedback: 'Please enter a display name for this user!!'});
      }
    }
    else if (!this.state.displayName) {
      this.setState({displayNameInvalid: true, displayNameFeedback: 'Please enter a display name for this user!!'});
    }
    if (this.state.password) {
      if (!this.state.password.trim()) {
        this.setState({passwordInvalid: true, passwordFeedback: 'Please enter a password for this user!!'});
      }
    }
    else if (!this.state.password) {
      this.setState({passwordInvalid: true, passwordFeedback: 'Please enter a password for this user!!'});
    }
    setTimeout(() => {
      if (!this.state.usernameInvalid && !this.state.displayNameInvalid && !this.state.passwordInvalid) {
        API.createUser(this.state, (err, res) => {
          if (err) {
            console.log(err)
            toast.warn("There Has Been An Error!", {
              position: toast.POSITION.BOTTOM_CENTER
            });
          }
          else {
            if (res.status === 202) {
              this.setState({usernameInvalid: true, usernameFeedback: res.data.errorMessage});
              toast.warn("Username is already taken!", {
                position: toast.POSITION.BOTTOM_CENTER
              });
            }
            else if (res.status === 200) {
              toast.success("User Created!", {
                position: toast.POSITION.BOTTOM_CENTER
              });
            }
          }
        });
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <h3>Create New User</h3>
        <Form>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input
              type="text"
              id="username"
              placeholder="johnDoe"
              onChange={this.handleChange}
              invalid={this.state.usernameInvalid}
            />
            <FormFeedback>{this.state.usernameFeedback}</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="displayName">Display Name</Label>
            <Input
              type="text"
              id="displayName"
              placeholder="John Doe"
              onChange={this.handleChange}
              invalid={this.state.displayNameInvalid}
            />
            <FormFeedback>{this.state.displayNameFeedback}</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="text"
              id="password"
              placeholder="Password123"
              onChange={this.handleChange}
              invalid={this.state.passwordInvalid}
            />
            <FormFeedback>{this.state.passwordFeedback}</FormFeedback>
          </FormGroup>
          <FormGroup className="my-4" check>
            <Input
              type="checkbox"
              id="isAdmin"
              onChange={this.handleCheckChange}
            />
            <Label for="isAdmin" check>Admin Privileges</Label>
          </FormGroup>
          <FormGroup>
            <Button
              color="primary"
              size="lg"
              onClick={this.handleFormSubmit}
            >Submit</Button>
          </FormGroup>
        </Form>
        <ToastContainer
          autoClose={4000}
        />
      </React.Fragment>
    )
  }
}

export default CreateUserForm;
