const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URI, {useNewUrlParser: true});
mongoose.set('useFindAndModify', false);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to test database');
});

module.exports = mongoose;