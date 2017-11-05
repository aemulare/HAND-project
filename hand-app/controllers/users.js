const express = require('express');
const db = require('../models');

const users = db.Users;
const polls = db.Posts;
const postResources = db.Resources;
const tags = db.Tags;


const UsersController = {
  registerRouter() {
    const router = express.Router();

    router.get('/', this.index);
    router.post('/', this.create);
    router.put('/:id', this.update);
    router.delete('/:id', this.delete);

    return router;
  },

  // get the collection of all users
  index(req, res) {
    db.users.findAll()
      .then((allUsers) => {
        res.json(allUsers);
      });
  },

  // creates a new user
  create(req, res) {
    db.users.create({
      email: req.body.email,
      passwordHash: req.body.passwordHash,
      firstName: req.body.firstName,
      middleName: req.body.middleName,
      lastName: req.body.lastName,
      dob: req.body.dob,
    })
      .then((user) => {
        res.json(user);
      })
      .catch(() => {
        res.sendStatus(400);
      });
  },
};


module.exports = UsersController.registerRouter();
