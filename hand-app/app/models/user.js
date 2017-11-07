module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('users', {
    email: DataTypes.STRING,
    passwordHash: { type: DataTypes.STRING, field: 'password_hash' },
    firstName: { type: DataTypes.STRING, field: 'first_name' },
    middleName: { type: DataTypes.STRING, field: 'middle_name' },
    lastName: { type: DataTypes.STRING, field: 'last_name' },
    dob: DataTypes.DATE,
    userpic: DataTypes.BLOB,
  }, {
    underscored: true,
  });

  User.associate = db => User.belongsTo(db.addresses);

  return User;
};
