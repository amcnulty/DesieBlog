const mongoose = require('mongoose');

const options = { discriminatorKey: 'kind' };

const articleSchema = mongoose.Schema({
  title: String,
  urlTitle: String,
  path: String,
  date: {
    type: Date,
    default: new Date()
  },
  thumbnailImage: {
    type: String,
    default: '/res/images/default.png'
  },
  bannerText: String,
  body: String
}, options);

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;