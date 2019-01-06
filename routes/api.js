const express = require('express');
const mongoose = require('../db/connection');
const router = express.Router();
const Article = require('../db/schemas/Article');

router.get('/books', (req, res) => {
  Article.find((err, articles) => {
    if (err) {
      console.log(err);
      return res.status(500).send();
    }
    return res.status(200).send(articles);
  });
});

router.post('/books', (req, res) => {
  Article.insertMany([
    {
      articlePath: 'https://www.google.com',
      thumbnailImage: 'https://simply-delicious-food.com/wp-content/uploads/2016/09/banana-oat-pancakes-3.jpg',
      bannerText: 'How to make delicious pancakes!'
    },
    {
      articlePath: 'https://www.google.com',
      thumbnailImage: 'https://images-gmi-pmc.edge-generalmills.com/087d17eb-500e-4b26-abd1-4f9ffa96a2c6.jpg',
      bannerText: 'How to make amazing cookies the right way!'
    }
  ], (err, articles) => {
    if (err) {
      console.log(err);
      return res.status(500).send();
    }
    return res.status(200).send();
  });
});

module.exports = router;