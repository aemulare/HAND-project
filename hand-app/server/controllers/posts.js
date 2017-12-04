const db = require('../models');


// GET index
exports.index = (req, res) => {
  db.posts.findAll()
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ code: 500, message: 'Internal server error' });
    });
};


// GET show
exports.show = (req, res) => {
  const { postId } = req.params;

  db.posts.findById(postId, {
    include: [
      {
        model: db.resources,
        include: [
          { model: db.tags }
        ]
      }
    ]
  })
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
};


// POST create
exports.create = (req, res) => {
  const { title, description, location, userId, resources } = req.body;

  db.posts.create({
    title,
    description,
    location,
    isOpen: true,
    user_id: userId,
    resources
  }, {
    include: [
      { model: db.resources }
    ]
  })
    .then((post) => {
      res.json(post);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ code: 500, message: 'Internal server error' });
    });
};


// PUT update
exports.update = (req, res) => {
  const { postId } = req.params;
  const { title, description, location } = req.body;

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
};


// DELETE destroy
exports.destroy = (req, res) => {
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
};
