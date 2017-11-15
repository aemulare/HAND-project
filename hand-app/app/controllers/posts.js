const express = require('express');

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
});


// PUT update
router.put('/:postId', (req, res) => {
  res.json({ text: 'PUT update action is called' });
});


// DELETE destroy
router.delete('/:postId', (req, res) => {
  res.json({ text: 'DELETE destroy action is called' });
});
