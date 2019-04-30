const mongoose = require('mongoose');
const Post = require('../models/post');

const dbName = 'posts';
mongoose.connect(`mongodb://localhost/${dbName}`);

const posts = [
  {
   title: 'lalala',
   description: 'i dont know'
  },

  {
   title: 'hello',
   description: 'is it me youre looking for'
  },

  {
   title: 'one',
   description: 'actually three'
  }
]

Post.create(posts, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${posts.length} celebraties`)
  mongoose.connection.close();
});
