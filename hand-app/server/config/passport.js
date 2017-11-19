const passport = require('passport');
const bcrypt = require('bcrypt-nodejs');
const LocalStrategy = require('passport-local').Strategy;
const jwt = require('passport-jwt');
const db = require('../models');
const config = require('./main');


function passwordsMatch(submitted, stored) {
  return bcrypt.compareSync(submitted, stored);
}

const localLogin = new LocalStrategy(
  { usernameField: 'email' },
  (email, password, done) => {
    db.users.findOne({
      where: { email },
    }).then((user) => {
      if (!user) {
        return done(null, false, { message: 'Incorrect email.' });
      }

      if (passwordsMatch(password, user.password) === false) {
        console.log('\n\nError match\n\n');
        return done(null, false, { message: 'Incorrect password.' });
      }

      console.log('\n\nCorrect login!!\n\n');
      return done(null, user, { message: 'Successfully Logged In!' });
    });
  }
);

const jwtOptions = {
  jwtFromRequest: jwt.ExtractJwt.fromAuthHeaderWithScheme('jwt'),
  secretOrKey: config.secret
};

const jwtLogin = new jwt.Strategy(jwtOptions, (payload, done) => {
  db.users.findById(payload.id)
    .then((user) => {
      if (!user) {
        return done(null, false, { message: 'Incorrect user ID' });
      }
      return done(null, user);
    });
});

passport.use(jwtLogin);
passport.use(localLogin);

module.exports = passport;
