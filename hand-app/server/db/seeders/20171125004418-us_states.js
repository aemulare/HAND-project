const data = require('../ref_data/us_states');

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.bulkInsert('us_states', data, {});
  },

  down: (queryInterface, DataTypes) => {
    return queryInterface.bulkDelete('us_states', null, {});
  }
};
