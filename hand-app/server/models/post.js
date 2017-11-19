module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('posts', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    isOpen: { type: DataTypes.BOOLEAN, field: 'is_open' },
  }, {
    underscored: true,
  });

  Post.associate = db => Post.belongsTo(db.users);

  return Post;
};
