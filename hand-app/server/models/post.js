module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('posts', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    location: DataTypes.STRING,
    isOpen: { type: DataTypes.BOOLEAN, field: 'is_open' },
  }, {
    underscored: true,
  });

  
  Post.associate = function(db) {
    Post.belongsTo(db.users);
    Post.hasMany(db.resources);
  } 

  return Post;
};
