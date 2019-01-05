const mongoose = require('mongoose');

let articleSchema = mongoose.Schema({
  articlePath: String,
  thumbnailImage: String,
  bannerText: String
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;