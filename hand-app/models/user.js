module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('users', {
    email: DataTypes.STRING,
    passwordHash: DataTypes.STRING,
    firstName: DataTypes.STRING,
    middleName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    dob: DataTypes.DATE,
    userpic: DataTypes.BLOB,
  }, {
    undercored: true,
    timestamps: false,
  });

  User.associate = db => User.belongsTo(db.addresses);

  return User;
};
