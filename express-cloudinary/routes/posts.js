const express = require('express');
const router = express.Router();
const Post = require('../models/post')
// const cloudinaryStorage = require('../config/cloudinary')
// const cloudinary = require('../config/cloudinary')
// const mulder = require('../config/cloudinary')
const parser = require('./../config/cloudinary')



router.get('/', (req, res, next)=>{
  Post.find({})
  .then((posts)=> res.render('posts/index', {posts}))
  .catch((err)= console.log(err))
})

router.get('/new', (req, res, next)=>{
  res.render('posts/new');
})

router.post('/', parser.single("image") , (req, res, next)=>{
  const imageUrl = req.file.secure_url;
  const {title, description} = req.body;
  const newPost = Post.create({title, description, imageUrl})
  newPost.save()
  .then(()=> res.redirect('/posts'))
  .catch((err)=> res.render('posts/new'))
})



module.exports = router;