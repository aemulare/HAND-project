const express = require('express');
const db = require('../models');

const router = express.Router();
module.exports = (app) => {
  app.use('/posts', router);
};


// GET index
router.get('/', (req, res) => {
  res.json({ text: 'GET index action is called' });
});


// GET show
router.get('/:postId', (req, res) => {
  res.json({ text: 'GET show action is called' });
});


// POST create
router.post('/', (req, res) => {
  res.json({ text: 'POST create action is called' });
  const { title, description, userId } = req.body;

  db.posts.create({
    title,
    description,
    isOpen: true,
    user_id: userId
  })
    .then((post) => {
      res.json(post);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ code: 500, message: 'Internal server error' });
    });
});


// PUT update
router.put('/:postId', (req, res) => {
  res.json({ text: 'PUT update action is called' });
});


// DELETE destroy
router.delete('/:postId', (req, res) => {
  res.json({ text: 'DELETE destroy action is called' });
});
