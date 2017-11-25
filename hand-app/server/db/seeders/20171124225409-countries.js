const data = require('../ref_data/countries');

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.bulkInsert('countries', data, {});
  },

  down: (queryInterface, DataTypes) => {
    return queryInterface.bulkDelete('countries', null, {});
  }
};
