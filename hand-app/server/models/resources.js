module.exports = (sequelize, DataTypes) => {
  const Resource = sequelize.define('resources', {
    quantity: { type: DataTypes.INTEGER },
  }, {
    underscored: true,
  });

  Resource.associate = function(db) {
    Resource.belongsTo(db.posts);
    Resource.belongsTo(db.tags);
  }

  return Resource;
};
