const express = require('express');
const router = express.Router();
const Post = require('../models/post')


router.get('/', (req, res, next)=>{
  Post.find({})
  .then((posts)=> res.render('posts', {posts}))
  .catch((err)= next(err))
})



module.exports = router;