const express = require('express');

const router = express.Router();
module.exports = (app) => {
  app.use('/', router);
};


router.get('/signup', (req, res) => {
  res.render('sign_up');
});


router.get('/signin', (req, res) => {
  res.render('sign_in');
});
