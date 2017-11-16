const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
  comment: String,
});

const SerieSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,  
  },
  status: {
    type: String,
    require: true,
  },
  comments: [CommentSchema]
});

const Serie = mongoose.model('Serie', SerieSchema);

module.exports = Serie;