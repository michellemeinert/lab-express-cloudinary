const cloudinaryStorage = require('multer-storage-cloudinary')
const multer = require('multer');
const cloudinary = require('cloudinary')

cloudinary.config({
  cloud_name: 'dbhywmhew',
  api_key: '187735699843312',
  api_secret: 'hpgn_Isyyr6Gq9aQAg4_fjmYo8U'
  });
  const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: "demo",
  allowedFormats: ["jpg", "png"],
  transformation: [{ width: 500, height: 500, crop: "limit" }]
  });

  const parser = multer({ storage: storage });

  module.exports = parser;