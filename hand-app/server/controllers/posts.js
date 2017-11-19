const express = require('express');
const db = require('../models');

const router = express.Router();
module.exports = (app) => {
  app.use('/posts', router);
};


// GET index
router.get('/', (req, res) => {
  db.posts.findAll()
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ code: 500, message: 'Internal server error' });
    });
});


// GET show
router.get('/:postId', (req, res) => {
  const { postId } = req.params;

  db.posts.findById(postId)
    .then((post) => {
      if (post) {
        res.json(post);
      } else {
        res.status(404).json({ code: 404, message: 'Post not found' });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ code: 500, message: 'Internal server error' });
    });
});


// POST create
router.post('/', (req, res) => {
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
  const { postId } = req.params;
  const { title, description } = req.body;

  db.posts.findById(postId)
    .then((post) => {
      if (post) {
        post.update({
          title,
          description,
        })
          .then((updatedPost) => {
            res.send(updatedPost);
          });
      } else {
        res.status(404).json({ code: 404, message: 'Post not found' });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ code: 500, message: 'Internal server error' });
    });
});


// DELETE destroy
router.delete('/:postId', (req, res) => {
  const { postId } = req.params;

  db.posts.findById(postId)
    .then((post) => {
      if (post) {
        post.destroy()
          .then(() => {
            res.status(204).end();
          });
      } else {
        res.status(404).json({ code: 404, message: 'Post not found' });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ code: 500, message: 'Internal server error' });
    });
});
