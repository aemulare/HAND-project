const jwt = require('jsonwebtoken');
const db = require('../models');
const config = require('../config/main');

const generateToken = user => jwt.sign(user, config.secret, { expiresIn: 10800 });
const setUserInfo = (user) => {
  const firstName = user.firstName || '';
  const lastName = user.lastName || '';
  let fullName = `${firstName} ${lastName}`;
  fullName = fullName.trim() || user.email;
  return {
    id: user.id,
    email: user.email,
    fullName
  };
};



exports.signin = (req, res) => {
  const { email } = req.body;
  db.users.findOne({
    where: { email }
  })
    .then((user) => {
      const userInfo = setUserInfo(user);
      res.status(200).json({
        token: `JWT ${generateToken(userInfo)}`,
        user: userInfo
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).send({ error: 'Internal server error' });
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
    where: { email }
  })
    .then((user) => {
      if (user) {
        return res.status(422).send({ error: 'That email address is already in use' });
      }
      return db.users.create({
        email,
        password,
        address: {
          country_id: 235
        }
      }, {
        include: [
          { model: db.addresses }
        ]
      });
    })
    .then((user) => {
      const userInfo = setUserInfo(user);
      return res.status(201).json({
        token: `JWT ${generateToken(userInfo)}`,
        user: userInfo
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).send({ error: 'Internal server error' });
    });
};
