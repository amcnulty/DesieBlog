const mongoose = require('mongoose');
const Article = require('./Article');

const options = { discriminatorKey: 'kind' };

const RecipeArticleSchema = mongoose.Schema({
  mainImage: String
}, options);

const RecipeArticle = Article.discriminator('Recipe', RecipeArticleSchema);

module.exports = RecipeArticle;
