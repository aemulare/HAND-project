module.exports = {
  up: (queryInterface, DataTypes) => queryInterface.createTable('addresses', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    address_line1: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    address_line2: {
      type: DataTypes.STRING,
    },
    city: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    region: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    state_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'us_states',
        key: 'id',
      },
    },
    postcode: {
      allowNull: false,
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
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }),


  down: (queryInterface, DataTypes) => queryInterface.dropTable('addresses'),
};
