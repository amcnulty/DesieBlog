const express = require('express');
const mongoose = require('../db/connection');
const router = express.Router();
const Article = require('../db/schemas/Article');
const BookArticle = require('../db/schemas/BookArticle');
const WineArticle = require('../db/schemas/WineArticle');

router.get('/articles/:kind', (req, res) => {
  Article.find({
    kind: req.params.kind
  }, (err, articles) => {
    if (err) {
      console.log(err);
      return res.status(500).send();
    }
    return res.status(200).send(articles);
  });
});

router.get('/books/:path', (req, res) => {
  Article.findOne({
    urlTitle: req.params.path
  }, (err, article) => {
    if (err) {
      console.log(err);
      return res.status(500).send();
    }
    if (!article) return res.status(404).send();
    return res.status(200).send(article);
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

module.exports = router;