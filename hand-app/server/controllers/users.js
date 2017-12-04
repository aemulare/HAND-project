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
          { model: db.us_states, as: 'state' },
          { model: db.countries, as: 'country' }
        ],
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


// PUT update
exports.update = (req, res) => {
  const { userId } = req.params;
  const {
    firstName,
    middleName,
    lastName,
    dob,
    phone,
    address
  } = req.body;
  const { addressLine1, addressLine2, city, region, postcode, state, country } = address;
  let updatedUser;

  db.users.findById(userId, {
    include: [{ model: db.addresses }]
  })
    .then((userInst) => {
      if (!userInst) {
        throw new Error('User not found');
      }
      return userInst.update({
        firstName,
        middleName,
        lastName,
        dob,
        phone
      });
    })
    .then((updatedInst) => {
      updatedUser = updatedInst.get();
      return updatedUser;
    })
    .then(user => db.addresses.findById(user.address.id))
    .then((addressInst) => {
      if (!addressInst) {
        throw new Error('Address not found');
      }
      return addressInst.update({
        addressLine1,
        addressLine2,
        city,
        region,
        postcode,
        state_id: state,
        country_id: country
      });
    })
    .then((updatedAddressInst) => {
      updatedUser.address = updatedAddressInst.get();
      return updatedUser;
    })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      console.log(err);
      const httpCode = err.code || 500;
      const errorMessage = err.message || 'Internal server error';
      res.status(httpCode).json({ code: httpCode, message: errorMessage });
    });
};
