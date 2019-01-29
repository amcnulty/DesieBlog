import axios from 'axios';
/**
 * The API utility makes api callouts simplified by not needing to worry about the endpoints.
 */
export const API = {
  /*
   *          !!##########################!!
   *          !!                          !!
   *          !!          Books           !!
   *          !!                          !!
   *          !!##########################!!
   */
  
  /**
   * POST request to create a new book article.
   * @param data The book article data.
   * @param callback The response from the request.
   */
  createBookArticle: (data, callback) => {
    axios.post('/api/books/create-article', data)
    .then(res => {
      callback(null, res);
    })
    .catch(err => {
      callback(err, err.response.status);
    });
  },

  /**
   * 
   */
  getBookArticle: (id, callback) => {
    axios.get('/api/article-data/books/', {
      params: {
        id: id
      }
    })
    .then(res => callback(null, res))
    .catch(err => callback(err, err.response.status));
  },
  /**
   *          !!##########################!!
   *          !!                          !!
   *          !!          Users           !!
   *          !!                          !!
   *          !!##########################!!
   */
  /**
   * Logs in a user.
   * @param data The body of the request.
   * @param callback The response from the request.
   */
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
