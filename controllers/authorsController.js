const Author = require('../models/author');

exports.create = (req, res) => {
  Author.create(req.body.author)
    .then(() => res.json({success: "Author created successfully"}))
    .catch(err => res.json(err));
};