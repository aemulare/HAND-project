const db = require('../models');


// GET all countries
exports.countries = (req, res) => {
  db.countries.findAll()
    .then((countries) => {
      res.json(countries);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ code: 500, message: 'Internal server error' });
    });
};


// GET all states
exports.states = (req, res) => {
  db.us_states.findAll()
    .then((states) => {
      res.json(states);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ code: 500, message: 'Internal server error' });
    });
};
