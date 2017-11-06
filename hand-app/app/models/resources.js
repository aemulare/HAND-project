module.exports = (sequelize, DataTypes) => {
  const Resource = sequelize.define('resources', {
    resourceCount: { type: DataTypes.INTEGER, field: 'resource_count' },
  }, {
    underscored: true,
    timestamps: false,
  });

  return Resource;
};
