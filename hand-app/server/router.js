const express = require('express');
const passport = require('./config/passport');
const auth = require('./controllers/auth');
const posts = require('./controllers/posts');
const refs = require('./controllers/references');
const users = require('./controllers/users');

const requireJwt = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });

module.exports = (app) => {
  const api = express.Router();

  // Authentication routes
  api.post('/signup', auth.signup);
  api.post('/signin', requireLogin, auth.signin);

  // Posts routes
  api.get('/posts', requireJwt, posts.index);
  api.get('/posts/:postId', requireJwt, posts.show);
  api.post('/posts', requireJwt, posts.create);
  api.put('/posts/:postId', requireJwt, posts.update);
  api.delete('/posts/:postId', requireJwt, posts.destroy);

  // Users routes
  api.get('/users', users.index);
  api.get('/users/:userId', users.show);


  // References routes
  api.get('/countries', requireJwt, refs.countries);
  api.get('/states', requireJwt, refs.states);
  api.get('/tags', requireJwt, refs.tags);


  app.use('/api/v1', api);
};
