const db = require('../models');


// GET index
exports.index = (req, res) => {
  db.posts.findAll({
    include: [
      {
        model: db.users,
        attributes: ['firstName', 'lastName']
    },
    {
      model: db.resources,
      include: [
        { model: db.tags }
      ]
    }
  ]
  })
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
  const { title, description, isOpen, location, resources = [] } = req.body;
  let updatedPost;
  let existingResources;

  db.posts.findById(postId, {
    include: [{ model: db.resources }]
  })
    .then((post) => {
      if (!post) {
        throw new Error('Post not found');
      }
      existingResources = post.resources || [];
      return post.update({
        title,
        description,
        location,
        isOpen
      });
    })
    .then((post) => {
      updatedPost = post.get();
      return updatedPost;
    })
    .then(() => Promise.all(resources.map((resource) => {
      const { quantity, tag_id } = resource;
      const toUpdate = existingResources.find(r => r.tag_id === resource.tag_id);
      if (toUpdate) {
        return toUpdate.update({ quantity });
      }
      return db.resources.create({
        quantity,
        tag_id,
        post_id: postId
      });
    })))
    .then(() => db.posts.findById(postId, {
      include: [{ model: db.resources }]
    }))
    .then((post) => {
      res.json(post);
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
