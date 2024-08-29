const Post = require('../models/postModel'); // Adjust the path as needed

exports.create = async (postData) => {
  const post = new Post(postData);
  return await post.save();
};

exports.update = async (id, updateData) => {
  return await Post.findByIdAndUpdate(id, updateData, { new: true });
};

// New method to find all posts
exports.findAll = async () => {
  return await Post.find(); 
};


exports.findById = async (id) => {
  return await Post.findById(id);
};
exports.delete = async (postId) => {
  const deletedPost = await Post.findByIdAndDelete(postId);
  return deletedPost;
};