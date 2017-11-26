const bcrypt = require('bcrypt-nodejs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('users', {
    email: DataTypes.STRING,
    password: { type: DataTypes.STRING, field: 'password_hash' },
    firstName: { type: DataTypes.STRING, field: 'first_name' },
    middleName: { type: DataTypes.STRING, field: 'middle_name' },
    lastName: { type: DataTypes.STRING, field: 'last_name' },
    dob: DataTypes.DATE,
    phone: DataTypes.STRING,
    userpic: DataTypes.BLOB,
  }, {
    underscored: true,
  });

  User.associate = db => User.belongsTo(db.addresses);

  /* eslint-disable func-names, prefer-arrow-callback, space-before-function-paren */
  User.prototype.checkPassword = function (guess, done) {
    bcrypt.compare(guess, this.password, (err, isMatch) => {
      done(err, isMatch);
    });
  };

  User.beforeCreate(user =>
    new sequelize.Promise((resolve) => {
      bcrypt.hash(user.password, null, null, (err, hashedPassword) => {
        resolve(hashedPassword);
      });
    }).then((hashedPassword) => {
      user.password = hashedPassword;
    }));

  return User;
};
