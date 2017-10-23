module.exports = {
  up: (queryInterface, DataTypes) => queryInterface.createTable('us_states', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING(2),
      allowNull: false,
    },
  }),


  down: queryInterface => queryInterface.dropTable('us_states'),
};
