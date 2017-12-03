const USState = require('./us_state');

module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('addresses', {
    addressLine1: {
      type: DataTypes.STRING,
      field: 'address_line1',
    },
    addressLine2: {
      type: DataTypes.STRING,
      field: 'address_line2',
    },
    city: DataTypes.STRING,
    region: DataTypes.STRING,
    postcode: DataTypes.STRING,
  }, {
    underscored: true,
    timestamps: false,
  });

  Address.associate = function(db) {
    Address.belongsTo(db.countries, {as: 'country'});
    Address.belongsTo(db.us_states, { as: 'state' });
  }


  return Address;
};
