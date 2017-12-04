module.exports = {
  up: (queryInterface, DataTypes) => queryInterface.createTable('addresses', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    address_line1: {
      type: DataTypes.STRING,
    },
    address_line2: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    region: {
      type: DataTypes.STRING,
    },
    state_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'us_states',
        key: 'id',
      },
    },
    postcode: {
      type: DataTypes.STRING,
    },
    country_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      defaultValue: 235,
      references: {
        model: 'countries',
        key: 'id',
      },
    }
  }),


  down: (queryInterface, DataTypes) => queryInterface.dropTable('addresses'),
};
