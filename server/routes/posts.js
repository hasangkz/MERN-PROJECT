const router = require('express').Router();
const {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  getSinglePost,
} = require('../controllers/postsController');

router.get('/', getPosts);
router.get('/:id', getSinglePost);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);

module.exports = router;
