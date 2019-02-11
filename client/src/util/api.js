import axios from 'axios';

const localHost = (process.env.NODE_ENV === 'production') ? '' : 'http://localhost:3005';
const config = { withCredentials: true };
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
   axios.get(localHost + '/api/article-data/', {
     params: {
       id: id
     }
   })
   .then(res => callback(null, res))
   .catch(err => callback(err, err));
 },
 /**
  * Gets an Article record with the given url field.
  * @param url The url to match with the urlTitle field of the record.
  * @callback Callback method with the api response.
  */
 getArticleByUrlTitle: (url, callback) => {
   axios.get(localHost + '/api/article-data/' + url)
   .then(res => {
     callback(null, res);
   })
   .catch(err => {
     callback(err, err);
   });
 },
 /**
  * Gets all the articles of the specified kind.
  * @param kind Book | Travel | Recipe| Wine the kind which is mapped to the Mongoose schema for the article type.
  * @param callback Callback method with the api response.
  */
 getArticlesByKind: (kind, callback) => {
   axios.get(localHost + `/api/articles?kind=${kind}`)
   .then(res => {
     callback(null, res);
   })
   .catch(err => {
     callback(err, err);
   });
 },
 /**
  * Finds articles that are before and after the given record in the database.\
  * @param record The article record to reference when finding adjacent matches.
  * @param callback Callback method with the api response.
  */
 findAdjacentArticles: (record, callback) => {
   axios.post(localHost + '/api/articles/adjacent', record)
   .then(res => {
     callback(null, res);
    })
    .catch(err => {
      callback(err, err);
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
    axios.post(localHost + '/api/books/create-article', data)
    .then(res => {
      callback(null, res.status);
    })
    .catch(err => {
      callback(err, err);
    });
  },
  /**
   * PUT request to update an existing book article.
   * @param id The id of the book article to update.
   * @param article Updated article information object
   * @param callback Callback method with the api response.
   */
  updateBookArticle: (id, article, callback) => {
    axios.put(localHost + '/api/books/update-article/' + id, article)
    .then(res => {
      callback(null, res);
    })
    .catch(err => {
      callback(err, err);
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
    axios.post(localHost + '/api/recipes/create-article', data)
    .then(res => {
      callback(null, res.status);
    })
    .catch(err => {
      callback(err, err);
    });
  },
  /**
   * PUT request to update an existing recipe article.
   * @param id The id of the recipe article to update.
   * @param article Updated article information object
   * @param callback Callback method with the api response.
   */
  updateRecipeArticle: (id, article, callback) => {
    axios.put(localHost + '/api/recipes/update-article/' + id, article)
    .then(res => {
      callback(null, res);
    })
    .catch(err => {
      callback(err, err);
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
    axios.post(localHost + '/api/travel/create-article', data)
    .then(res => {
      callback(null, res.status);
    })
    .catch(err => {
      callback(err, err);
    });
  },
  /**
   * PUT request to update an existing travel article.
   * @param id The id of the travel article to update.
   * @param article Updated article information object
   * @param callback Callback method with the api response.
   */
  updateTravelArticle: (id, article, callback) => {
    axios.put(localHost + '/api/travel/update-article/' + id, article)
    .then(res => {
      callback(null, res);
    })
    .catch(err => {
      callback(err, err);
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
    axios.post(localHost + '/api/wine/create-article', data)
    .then(res => {
      callback(null, res.status);
    })
    .catch(err => {
      callback(err, err);
    });
  },
  /**
   * PUT request to update an existing wine article.
   * @param id The id of the wine article to update.
   * @param article Updated article information object
   * @param callback Callback method with the api response.
   */
  updateWineArticle: (id, article, callback) => {
    axios.put(localHost + '/api/wine/update-article/' + id, article)
    .then(res => {
      callback(null, res);
    })
    .catch(err => {
      callback(err, err);
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
    axios.post(localHost + '/users/login', data, {withCredentials: true})
    .then(res => {
      callback(null, res.status);
    })
    .catch(err => {
      callback(err, err);
    }); 
  },

  logoutUser: callback => {
    axios.post(localHost + '/users/logout', null, config)
    .then(res => {
      callback(null, res.status);
    })
    .catch(err => {
      callback(err, null);
    });
  },

  userPresent: callback => {
    axios.get(localHost + '/users/user-present', config)
    .then(user => {
      callback(null, user);
    })
    .catch(err => {
      callback(err, err);
    });
  },
  /*
   *          !!##########################!!
   *          !!                          !!
   *          !!          Images          !!
   *          !!                          !!
   *          !!##########################!!
   */

  uploadImage: (file, tags, callback) => {
    axios.get(localHost + '/api/image-upload-credentials', config)
    .then(res => {
      if (!tags) tags = ['Desie Blog'];
      const formData = new FormData();
      formData.append('file', file);
      formData.append('tags', tags);
      formData.append('upload_preset', res.data.UPLOAD_PRESET);
      formData.append('api key', res.data.API_KEY);
      formData.append('timestamp', (Date.now() / 1000) | 0);
  
      axios.post(`https://api.cloudinary.com/v1_1/${res.data.CLOUD_NAME}/image/upload`, formData, {
        headers: { "X-Requested-With": "XMLHttpRequest" }
      })
      .then(res => {
        callback(null, res);
      })
      .catch(err => {
        callback(err, err);
      });
    })
    .catch(err => {
      callback(err, err);
    });
  },

  getAllImages: callback => {
    axios.get(localHost + '/api/images', config)
    .then(res => {
      callback(null, res);
    })
    .catch(err => {
      callback(err, err);
    });
  },

  deleteImage: (id, callback) => {
    axios.delete(localHost + `/api/images/${id}`, config)
    .then(res => {
      callback(null, res);
    })
    .catch(err => {
      callback(err, err);
    });
  }
}
