module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.bulkInsert('tags', [
      { name: 'food' },
      { name: 'shelter' },
      { name: 'clothes' },
      { name: 'power generation' },
      { name: 'construction' },
      { name: 'pet care' },
      { name: 'moving' },
      { name: 'water' },
      { name: 'cleaning' },
      { name: 'workers' },
      { name: 'cooking' },
    ], {});
  },

  down: (queryInterface, DataTypes) => {
    return queryInterface.bulkDelete('tags', null, {});
  }
};
