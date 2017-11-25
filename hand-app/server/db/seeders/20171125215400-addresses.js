const data = require('../mock_data/addresses');

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.bulkInsert('addresses', data, {});
  },

  down: (queryInterface, DataTypes) => {
    return queryInterface.bulkDelete('addresses', null, {});
  }
};
