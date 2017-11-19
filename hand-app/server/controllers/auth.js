const jwt = require('jsonwebtoken');
const db = require('../models');
const config = require('../config/main');

const generateToken = user => jwt.sign(user, config.secret, { expiresIn: 10800 });
const setUserInfo = request => ({ id: request.id, email: request.email });


exports.signin = (req, res) => {
  const userInfo = setUserInfo(req.user);
  res.status(200).json({
    token: `JWT ${generateToken(userInfo)}`,
    user: userInfo
  });
};


exports.signup = (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    return res.status(422).send({ error: 'You must enter an email address' });
  }
  if (!password) {
    return res.status(422).send({ error: 'You must enter a password' });
  }

  db.users.findOne({
    where: { email },
  })
    .then((existingUser) => {
      if (existingUser) {
        return res.status(422).send({ error: 'That email address is already in use' });
      }
      db.users.create({
        email,
        password,
      })
        .then((user) => {
          const userInfo = setUserInfo(user);
          return res.status(201).json({
            token: `JWT ${generateToken(userInfo)}`,
            user: userInfo
          });
        });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).send({ error: 'Internal server error' });
    });
};
