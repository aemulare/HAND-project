const express = require('express');
const passport = require('../../config/passport');
const db = require('../models');

const router = express.Router();
module.exports = (app) => {
  app.use('/', router);
};


router.post('/signup', (req, res) => {
  const { email, password } = res.body;
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

