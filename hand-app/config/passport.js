const bcrypt = require('bcrypt-nodejs');
const passportLocal = require('passport-local');

module.exports = (passport, user) => {
  const User = user;
  const LocalStrategy = passportLocal.Strategy;

  passport.use('local-signup', new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true,
    },

    (req, email, password, done) => {
      const generateHash = pwd => bcrypt.hashSync(pwd, bcrypt.genSaltSync(8), null);

      User.findOne({
        where: { email },
      })
        .then((existingUser) => {
          if (existingUser) {
            return done(null, false, { message: 'That email is already token' });
          }

          const userPassword = generateHash(password);
          const data = {
            email,
            pasword: userPassword,
          };

          User.create(data)
            .then((newUser, created) => {
              if (!newUser) {
                return done(null, false);
              }
              return done(null, newUser);
            });
        });
    },
  ));
};
