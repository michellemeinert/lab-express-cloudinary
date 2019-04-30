const express = require('express');
const router = express.Router();
const postsRouter = require('./posts')
/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

module.exports = router;

router.use('/posts', postsRouter);