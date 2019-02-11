const express = require('express');
const mongoose = require('../db/connection');
const router = express.Router();
const Article = require('../db/schemas/Article');
const BookArticle = require('../db/schemas/BookArticle');
const RecipeArticle = require('../db/schemas/RecipeArticle');
const TravelArticle = require('../db/schemas/TravelArticle');
const WineArticle = require('../db/schemas/WineArticle');
const swaggerJSDoc = require('swagger-jsdoc');
const path = require('path');
const axios = require('axios');

const swaggerDefinition = {
  info: {
    title: 'DesieBlog',
    version: '1.0.0',
    description: 'All things animlas',
  },
  host: 'localhost:3000',
  basePath: '/',
};
const options = {
  swaggerDefinition,
  apis: [path.resolve(__dirname, 'api.js')],
};
const swaggerSpec = swaggerJSDoc(options);

// -- routes for docs and generated swagger spec --

router.get('/swagger.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

/**
 * @swagger
 * /articles:
 *    get:
 *      summary: Get Articles
 *      description: Gets all articles of a specific type if a kind parameter is supplied. Otherwise will get all articles of all types.
 *      parameters:
 *        - name: kind
 *          in: query
 *          description: The kind of articles to return.
 *          schema:
 *            type: string
 *            enum:
 *              - Book
 *              - Wine
 *              - Travel
 *              - Recipe
 *      tags:
 *        - Articles
 *      responses:
 *        200:
 *          description: One or more articles were found.
 *          content:
 *            application/json:  
 *              schema:
 *                type: array
 *                items:
 *                  type: object
 *                  properties:
 *                    title:
 *                      type: string
 *                      description: The display title of the article.
 *                      example: Moby Dick
 *                    urlTitle:
 *                      type: string
 *                      description: The portion of the url that is associated with this article.
 *                      example: moby-dick
 *                    path:
 *                      type: string
 *                      format: uri
 *                      description: The relative path to this article.
 *                      example: /books/moby-dick
 *                    date:
 *                      type: string
 *                      format: date-time
 *                      description: The date and time that the article was created.
 *                    thumbnailImage:
 *                      type: string
 *                      format: uri
 *                      description: The location of the thumbnailImage for this article.
 *                    bannerText:
 *                      type: string
 *                      description: Text shown on article thumbnail.
 *                    body:
 *                      type: string
 *                      format: html
 *                      description: HTML string that represents the body of the article.
 */
router.get('/articles', (req, res) => {
  if (req.query.kind) {
    Article.find({
      kind: req.query.kind
    }, (err, articles) => {
      if (err) {
        console.log(err);
        return res.status(500).send();
      }
      if (!articles) res.status(404).send();
      return res.status(200).send(articles);
    });
  }
  else {
    Article.find((err, articles) => {
      if (err) {
        console.log(err);
        return res.status(500).send();
      }
      if (!articles) res.status(404).send();
      return res.status(200).send(articles);
    });
  }
});

router.post('/articles/adjacent', (req, res) => {
  const adjacentArticles = {
    previous: {},
    next: {}
  }
  Article.find({
    kind: req.body.kind
  }, (err, articles) => {
    if (err) {
      console.log(err);
      return res.status(500).send();
    }
    if (!articles) res.status(404).send();
    let currentArticleIndex;
    articles.find((article, index) => {
      if (article._id.toString() === req.body.currentArticle._id) {
        currentArticleIndex = index;
        return true;
      }
      else return false;
    });
    if (currentArticleIndex > 0) adjacentArticles.previous = articles[currentArticleIndex - 1];
    else adjacentArticles.previous = articles[articles.length - 1];
    if (currentArticleIndex < articles.length - 1) adjacentArticles.next = articles[currentArticleIndex + 1];
    else adjacentArticles.next = articles[0];
    return res.status(200).send(adjacentArticles);
  });
});
/**
 * @swagger
 * /list:
 *   get:
 *     summary: List all the animals
 *     description: Returns a list of all the animals, optionally sorted
 *     tags:
 *       - animals
 *     parameters:
 *       - in: query
 *         name: sort
 *         type: string
 *         required: false
 *         enum:
 *           - yes
 *           - no
 *     responses:
 *       200:
 *         description: List of animals
 *         schema:
 *           type: object
 *           properties:
 *             animals:
 *               type: array
 *               description: all the animals
 *               items:
 *                 type: string
 */
router.get('/article-data/:urlTitle', (req, res) => {
  Article.findOne({
    urlTitle: req.params.urlTitle
  }, (err, article) => {
    if (err) {
      console.log(err);
      return res.status(500).send();
    }
    if (!article) return res.status(404).send();
    return res.status(200).send(article);
  });
});

router.get('/article-data', (req, res) => {
  Article.findById(req.query.id, (err, article) => {
    if (err) {
      console.log(err);
      return res.status(500).send();
    }
    if (!article) return res.status(404).send();
    return res.status(200).send(article);
  });
});

router.put('/article/update-article/:id', (req, res) => {
  if (!req.session.user) {
    return res.status(401).send();
  }
  Article.findByIdAndUpdate(req.params.id, req.body, (err, article) => {
    if (err) {
      console.log(err);
      return res.status(500).send();
    }
    return res.status(200).send();
  });
});

router.delete('/article/:id', (req, res) => {
  if (!req.session.user) {
    return res.status(401).send();
  }
  Article.findByIdAndDelete(req.params.id, (err, article) => {
    if (err) {
      console.log(err);
      return res.status(500).send();
    }
    return res.status(200).send();
  });
});

router.post('/books/create-article', (req, res) => {
  if (!req.session.user) {
    return res.status(401).send();
  }
  const newBookArticle = new BookArticle(req.body);

  newBookArticle.save(err => {
    if (err) {
      console.log(err);
      return res.status(500).send();
    }
    return res.status(200).send();
  });
});

router.post('/recipes/create-article', (req, res) => {
  if (!req.session.user) {
    return res.status(401).send();
  }
  const newRecipeArticle = new RecipeArticle(req.body);

  newRecipeArticle.save(err => {
    if (err) {
      console.log(err);
      return res.status(500).send();
    }
    return res.status(200).send();
  });
});

router.post('/travel/create-article', (req, res) => {
  const newTravelArticle = new TravelArticle(req.body);

  newTravelArticle.save(err => {
    if (err) {
      console.log(err);
      return res.status(500).send();
    }
    return res.status(200).send();
  });
});

router.post('/wine/create-article', (req, res) => {
  const newWineArticle = new WineArticle(req.body);

  newWineArticle.save(err => {
    if (err) {
      console.log(err);
      return res.status(500).send();
    }
    return res.status(200).send();
  });
});

router.post('/books', (req, res) => {
  BookArticle.insertMany([
    {
      title: 'Moby Dick',
      urlTitle: 'moby-dick',
      authors: ['Herman Melville'],
      path: '/books/moby-dick',
      thumbnailImage: 'https://images-na.ssl-images-amazon.com/images/I/41VnFKC9srL.jpg',
      bannerText: 'My review on Moby Dick.',
      bookImage: 'https://images-na.ssl-images-amazon.com/images/I/41VnFKC9srL.jpg',
      body: '<p>Lorem ipsum dolor sit, amet <em>consectetur adipisicing elit.</em> Nesciunt quis similique quos <b>voluptatum</b>, corrupti repellat vero magni asperiores. Sit doloremque expedita commodi repudiandae animi laborum! Nihil iusto in optio aut.</p><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et hic animi voluptatum ad nulla magni modi quam fuga sed delectus autem <b>distinctio</b>, <em>est numquam.</em> Animi non sed similique nihil officia voluptas numquam veniam ea amet voluptates, eos <a href="https://www.google.com">possimus consequuntur</a> quae, odit placeat earum, a pariatur. <b>Tenetur error</b> veniam illo esse, facere dolores dolor sunt consectetur <em>illum id soluta aperiam?</em> Libero.</p>'
    },
    {
      title: 'Principia Mathematica',
      urlTitle: 'principia-mathematica',
      authors: ['Alfred North Whitehead', 'Bertrand Russell'],
      path: '/books/principia-mathematica',
      thumbnailImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Prinicipia-title.png/220px-Prinicipia-title.png',
      bannerText: 'Why you should read Principia Mathematica.',
      bookImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Prinicipia-title.png/220px-Prinicipia-title.png',
      body: '<p>Lorem ipsum dolor sit, amet <em>consectetur adipisicing elit.</em> Nesciunt quis similique quos <b>voluptatum</b>, corrupti repellat vero magni asperiores. Sit doloremque expedita commodi repudiandae animi laborum! Nihil iusto in optio aut.</p><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et hic animi voluptatum ad nulla magni modi quam fuga sed delectus autem <b>distinctio</b>, <em>est numquam.</em> Animi non sed similique nihil officia voluptas numquam veniam ea amet voluptates, eos <a href="https://www.google.com">possimus consequuntur</a> quae, odit placeat earum, a pariatur. <b>Tenetur error</b> veniam illo esse, facere dolores dolor sunt consectetur <em>illum id soluta aperiam?</em> Libero.</p>'
    }
  ], (err, articles) => {
    if (err) {
      console.log(err);
      return res.status(500).send();
    }
    return res.status(200).send();
  });
});

router.post('/wine', (req, res) => {
  WineArticle.insertMany([
    {
      title: 'Delicious Cabernets',
      urlTitle: 'delicious-cabernets',
      path: '/wine/delicious-cabernets',
      thumbnailImage: 'https://www.winespotswines.com/images/cabernet-sauvignon-800x1005-3.jpg',
      bannerText: 'How to pick the best Cabernet Sauvignon.',
      variety: 'Cabernet Sauvingnon',
      body: '<p>Lorem ipsum dolor sit, amet <em>consectetur adipisicing elit.</em> Nesciunt quis similique quos <b>voluptatum</b>, corrupti repellat vero magni asperiores. Sit doloremque expedita commodi repudiandae animi laborum! Nihil iusto in optio aut.</p><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et hic animi voluptatum ad nulla magni modi quam fuga sed delectus autem <b>distinctio</b>, <em>est numquam.</em> Animi non sed similique nihil officia voluptas numquam veniam ea amet voluptates, eos <a href="https://www.google.com">possimus consequuntur</a> quae, odit placeat earum, a pariatur. <b>Tenetur error</b> veniam illo esse, facere dolores dolor sunt consectetur <em>illum id soluta aperiam?</em> Libero.</p>'
    }
  ], (err, articles) => {
    if (err) {
      console.log(err);
      return res.status(500).send();
    }
    return res.status(200).send();
  });
});

router.get('/image-upload-credentials', (req, res) => {
  if (!req.session.user) {
    return res.status(401).send();
  }
  return res.status(200).send({
    UPLOAD_PRESET: process.env.UPLOAD_PRESET,
    API_KEY: process.env.API_KEY,
    CLOUD_NAME: process.env.CLOUD_NAME
  });
});

router.get('/images', (req, res) => {
  if (!req.session.user) {
    return res.status(401).send();
  }
  axios.get(`https://${process.env.API_KEY}:${process.env.API_SECRET}@api.cloudinary.com/v1_1/${process.env.CLOUD_NAME}/resources/image?tags=true&max_results=500`)
  .then(images => {
    return res.status(200).send(images.data);
  })
  .catch(err => {
    console.log(err);
    return res.status(500).send(err);
  });
});

router.delete('/images/:id', (req, res) => {
  if (!req.session.user) {
    return res.status(401).send();
  }
  axios.delete(`https://${process.env.API_KEY}:${process.env.API_SECRET}@api.cloudinary.com/v1_1/${process.env.CLOUD_NAME}/resources/image/upload?public_ids[]=${req.params.id}`)
  .then(response => {
    return res.status(200).send();
  })
  .catch(err => {
    console.log(err);
    return res.status(500).send();
  });
});

module.exports = router;