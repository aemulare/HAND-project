module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('tags', {
    name: DataTypes.STRING,
  }, {
    undercored: true,
    timestamps: false,
  });

  return Tag;
};
