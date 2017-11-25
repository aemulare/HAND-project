module.exports = {
  up: (queryInterface, DataTypes) => queryInterface.createTable('tags', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    }
  }),


  down: (queryInterface, DataTypes) => queryInterface.dropTable('tags'),
};
