const express = require('express');

const router = express.Router();
module.exports = (app) => {
  app.use('/', router);
};


router.get('/home', (req, res) => {
  res.render('home');
});
