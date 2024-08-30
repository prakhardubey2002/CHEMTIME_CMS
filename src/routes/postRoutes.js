const express = require('express')
const router = express.Router()
const postController = require('../controllers/postController')

router.post('/', postController.createPost)

router.put('/:id', postController.updatePost)

router.get('/', postController.getAllPosts)
router.get('/:id', postController.getPostById)
router.delete('/:id', postController.deletePost)
router.get('/top-blogs/:category', postController.getTopBlogsByCategory);
module.exports = router
