module.exports = (sequelize, DataTypes) => {
  const USState = sequelize.define('us_states', {
    name: DataTypes.STRING,
    code: DataTypes.STRING,
  }, {
    underscored: true,
    timestamps: false,
  });
  return USState;
};
