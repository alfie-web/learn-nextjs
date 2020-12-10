const { Router } = require('express');
const { PostsController } = require('../controllers');

const postsController = new PostsController();
const router = Router();

router.get('/', postsController.getAll);
router.get('/:id', postsController.getById);
router.post('/create', postsController.create);

module.exports = router;