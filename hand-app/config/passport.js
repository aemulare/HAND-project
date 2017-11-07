const bcrypt = require('bcrypt-nodejs');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('../app/models');


function passwordsMatch(submitted, stored) {
  return bcrypt.compareSync(submitted, stored);
}

const strategy = new LocalStrategy(
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
  },
);

passport.use(strategy);


passport.serializeUser((user, done) => {
  done(null, user.id);
});


passport.deserializeUser((id, done) => {
  db.users.findById(id).then((user) => {
    if (!user) {
      return done(null, false);
    }
    return done(null, user);
  });
});

passport.redirectIfLoggedIn = route =>
  (req, res, next) => (req.user ? res.redirect(route) : next());

passport.redirectIfNotLoggedIn = route =>
  (req, res, next) => (req.user ? next() : res.redirect(route));

module.exports = passport;
