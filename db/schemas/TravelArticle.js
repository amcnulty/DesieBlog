const mongoose = require('mongoose');
const Article = require('./Article');

const options = { discriminatorKey: 'kind' };

const TravelArticleSchema = mongoose.Schema({
  mainImage: String
}, options);

const TravelArticle = Article.discriminator('Travel', TravelArticleSchema);

module.exports = TravelArticle;
