const mongoose = require('mongoose');
const Article = require('./Article');

const options = { discriminatorKey: 'kind' };

const WineArticleSchema = mongoose.Schema({
  mainImage: String
}, options);

const WineArticle = Article.discriminator('Wine', WineArticleSchema);

module.exports = WineArticle;
