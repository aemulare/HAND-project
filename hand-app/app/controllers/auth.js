const express = require('express');
const db = require('../models');

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


router.post('/signup', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const passwordConfirmation = req.body.password_confirm;

  db.users.create({
    email,
    passwordHash: 'kvakvakva',
  })
    .then(() => {
      res.redirect('/');
    })
    .catch((err) => {
      console.log(err);
      res.redirect('/signup');
    });
});

