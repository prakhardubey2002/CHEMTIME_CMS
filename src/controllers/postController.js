const postService = require('../services/postService');

exports.createPost = async (req, res) => {
  try {
    const newPost = await postService.create(req.body);
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const updatedPost = await postService.update(req.params.id, req.body);
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// New method to retrieve all posts
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await postService.findAll();
    res.status(200).json(posts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
