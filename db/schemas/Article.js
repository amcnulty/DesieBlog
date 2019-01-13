const mongoose = require('mongoose');

let articleSchema = mongoose.Schema({
  title: String,
  urlTitle: String,
  authors: [String],
  path: String,
  date: Date,
  thumbnailImage: String,
  bannerText: String,
  bookImage: String,
  body: String
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;