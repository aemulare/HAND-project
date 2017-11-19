module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define('countries', {
    number: DataTypes.INTEGER,
    alpha2code: DataTypes.STRING,
    alpha3code: DataTypes.STRING,
    name: DataTypes.STRING,
    topleveldomain: DataTypes.STRING,
  }, {
    undercored: true,
    timestamps: false,
  });
  return Country;
};
