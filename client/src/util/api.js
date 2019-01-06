import axios from 'axios';
/**
 * The API utility makes api callouts simplified by not needing to worry about the endpoints.
 */
export const API = {
  loginUser: (data, callback) => {
    axios.post('/users/login', data)
    .then(res => {
      callback(null, res.status);
    })
    .catch(err => {
      callback(err, err.response.status);
    }); 
  },

  logoutUser: callback => {
    axios.post('/users/logout')
    .then(res => {
      callback(null, res.status);
    })
    .catch(err => {
      callback(err, null);
    });
  },

  userPresent: callback => {
    axios.get('/users/user-present')
    .then(user => {
      callback(null, user);
    })
    .catch(err => {
      callback(err, err.response.status);
    });
  }
}
