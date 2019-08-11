// We will need our mongoose library
const mongoose = require(`mongoose`);

// Our schema
const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true // we will require a title for our movie
  },
  content: {
    type: String,
    required: false
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',
    required: true
  },
  status: {
    type: String,
    enum: ['DRAFT', 'PUBLISHED'],
    default: 'DRAFT'
  }
},{ 
  timestamps: true // we want timestamps to keep track of when our movies were created
});

// Query Helper
// A helper that will return all movies with the status of draft
MovieSchema.query.drafts = function () {
  return this.where({
    status: 'DRAFT'
  });
};

// A helper that will return all movies with the status of published
MovieSchema.query.published = function () {
  return this.where({
    status: 'PUBLISHED'
  });
};

// Exporting our movie model
module.exports = mongoose.model('Movie', MovieSchema);