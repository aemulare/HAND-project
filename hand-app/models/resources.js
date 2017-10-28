module.exports = (sequelize, DataTypes) => {
  const Resource = sequelize.define('resources', {
    resourceCount: DataTypes.INTEGER,
  }, {
    underscored: true,
    timestamps: false,
  });

  return Resource;
};
