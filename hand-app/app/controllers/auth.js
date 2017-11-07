const express = require('express');
const passport = require('../../config/passport');
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

  db.users.create({
    email,
    password,
  })
    .then((user) => {
      req.login(user, () => res.redirect('/'));
    })
    .catch((err) => {
      console.log(err);
      res.render('signup');
    });
});


router.post('/signin', (req, res) => {
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/signin',
  })(req, res);
});

