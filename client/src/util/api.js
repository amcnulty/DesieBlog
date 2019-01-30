import axios from 'axios';
/**
 * The API utility makes api callouts simplified by not needing to worry about the endpoints.
 */
export const API = {
  
  /*
  *          !!##########################!!
  *          !!                          !!
  *          !!        Articles          !!
  *          !!                          !!
  *          !!##########################!!
  */
 
 /**
  * Gets an Artcile of the given Id.
  * @param Id Id of the Article record.
  * @param callback Callback method with the api response.
  */
 getArticleById: (id, callback) => {
   axios.get('/api/article-data/', {
     params: {
       id: id
     }
   })
   .then(res => callback(null, res))
   .catch(err => callback(err, err.response.status));
 },
 /**
  * Gets an Article record with the given url field.
  * @param url The url to match with the urlTitle field of the record.
  * @callback Callback method with the api response.
  */
 getArticleByUrlTitle: (url, callback) => {
   axios.get('/api/article-data/' + url)
   .then(res => {
     callback(null, res);
   })
   .catch(err => {
     callback(err, err.response.status);
   });
 },
 /**
  * Gets all the articles of the specified kind.
  * @param kind Book | Travel | Recipe| Wine the kind which is mapped to the Mongoose schema for the article type.
  * @param callback Callback method with the api response.
  */
 getArticlesByKind: (kind, callback) => {
   axios.get(`/api/articles?kind=${kind}`)
   .then(res => {
     callback(null, res);
   })
   .catch(err => {
     callback(err, err.response.status);
   });
 },
 /**
  * Finds articles that are before and after the given record in the database.\
  * @param record The article record to reference when finding adjacent matches.
  * @param callback Callback method with the api response.
  */
 findAdjacentArticles: (record, callback) => {
   axios.post('/api/articles/adjacent', record)
   .then(res => {
     callback(null, res);
    })
    .catch(err => {
      callback(err, err.response.status);
    });
  },
  
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
   * @param callback Callback method with the api response.
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
  /*
   *          !!##########################!!
   *          !!                          !!
   *          !!         Recipes          !!
   *          !!                          !!
   *          !!##########################!!
   */

  /**
   * POST request to create a new recipe article.
   * @param data The recipe article data.
   * @param callback Callback method with the api response.
   */
  createRecipeArticle: (data, callback) => {
    axios.post('/api/recipes/create-article', data)
    .then(res => {
      callback(null, res);
    })
    .catch(err => {
      callback(err, err.response.status);
    });
  },
  /*
   *          !!##########################!!
   *          !!                          !!
   *          !!          Travel          !!
   *          !!                          !!
   *          !!##########################!!
   */

  /**
   * POST request to create a new travel article.
   * @param data The travel article data.
   * @param callback Callback method with the api response.
   */
  createTravelArticle: (data, callback) => {
    axios.post('/api/travel/create-article', data)
    .then(res => {
      callback(null, res);
    })
    .catch(err => {
      callback(err, err.response.status);
    });
  },
  /*
   *          !!##########################!!
   *          !!                          !!
   *          !!           Wine           !!
   *          !!                          !!
   *          !!##########################!!
   */

  /**
   * POST request to create a new wine article.
   * @param data The wine article data.
   * @param callback Callback method with the api response.
   */
  createWineArticle: (data, callback) => {
    axios.post('/api/wine/create-article', data)
    .then(res => {
      callback(null, res);
    })
    .catch(err => {
      callback(err, err.response.status);
    });
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
