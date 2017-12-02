const db = require('../models');

// GET index
exports.index = (req, res) => {
  db.users.findAll()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ code: 500, message: 'Internal server error' });
    });
};



// GET show
exports.show = (req, res) => {
  const { userId } = req.params;

  db.users.findById(userId, {
    include: [
      {
        model: db.addresses,
        include: [
          {
            model: db.us_states, as: 'state'
          }
        ]
      }
    ]
  })
    .then((user) => {
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ code: 404, message: 'user not found' });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ code: 500, message: 'Internal server error' });
    });
};
