import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './portal.css';
import { API } from '../../../util/api';

class Portal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      usernameValid: true,
      password: '',
      passwordValid: true
    }
  }

  componentDidMount() {

  }

  handleSumbmit = e => {
    let usernameValid, passwordValid;
    e.preventDefault();
    if (this.state.username === '') usernameValid = false;
    else usernameValid = true;
    if (this.state.password === '' || this.state.password.length < 6) passwordValid = false;
    else passwordValid = true;
    this.setState({
      usernameValid: usernameValid,
      passwordValid: passwordValid
    }, () => {
      if (this.state.usernameValid && this.state.passwordValid) {
        API.loginUser({
          username: this.state.username,
          password: this.state.password
        }, (err, status) => {
          if (err) {
            console.log(err);
          }
          this.props.history.push('/cms/dashboard');
        });
      }
    });
  }

  handleChange = e => {
    const { id, value } = e.target;

    this.setState({
      [id]: value
    });
  }

  render() {

    return (
      <div className="Portal">
        <div className="content">
          <div className="headers">
            <h1>Welcome to the Desie Blog CMS Portal</h1>
            <h3>Login to start adding content to our site.</h3>
          </div>
          <form className="loginForm" onSubmit={this.handleSumbmit}>
            <span>
              <label htmlFor="username">Username</label>
              <input
                id="username"
                className={"mb-3 form-control" + (this.state.usernameValid ? '' : ' is-invalid')}
                type="text"
                value={this.state.username}
                onChange={this.handleChange}
                placeholder="Enter Username"
              />
              <div className="invalid-feedback">
                Please enter a valid username.
              </div>
            </span>
            <span>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                className={"form-control" + (this.state.passwordValid ? '' : ' is-invalid')}
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
                placeholder="Enter Password"
              />
              <div className="invalid-feedback">
                Password not recognized.
              </div>
            </span>
            <button type="submit" className="btn btn-primary mt-3">SUBMIT</button>
          </form>
        </div>
        <footer>
          <span className="copyright">&copy; www.desieblog.com 2019</span>
        </footer>
      </div>
    )
  }
}

export default Portal;