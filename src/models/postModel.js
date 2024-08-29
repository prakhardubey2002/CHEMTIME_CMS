const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String },
  location: { type: String, required: true },
});

module.exports = mongoose.model('Post', PostSchema);
