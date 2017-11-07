module.exports = {
  up: (queryInterface, DataTypes) => queryInterface.createTable('countries', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    number: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    alpha2code: {
      allowNull: false,
      type: DataTypes.STRING(2),
    },
    alpha3code: {
      allowNull: false,
      type: DataTypes.STRING(3),
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    topleveldomain: {
      allowNull: false,
      type: DataTypes.STRING(3),
    },
  }),


  down: (queryInterface, DataTypes) => queryInterface.dropTable('countries'),
};
