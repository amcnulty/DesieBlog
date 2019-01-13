const mongoose = require('mongoose');
const Article = require('./Article');

const options = { discriminatorKey: 'kind' };

const BookArticleSchema = mongoose.Schema({
  authors: [String],
  bookImage: String
}, options);

const BookArticle = Article.discriminator('Book', BookArticleSchema);

module.exports = BookArticle;
