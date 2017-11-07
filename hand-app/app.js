const express = require('express');
const config = require('./config/config');

const app = express();

module.exports = require('./config/express')(app, config);


if (!module.parent) {
  app.listen(config.port, () => {
    console.log(`Express server listening on port ${config.port}`);
  });
}

// const session = require('express-session');
// const passport = require('passport');
// const authRoute = require('./app/routes/auth.js');
// const homeRoute = require('./app/routes/home.js');


// authRoute(app);
// homeRoute(app);


// // Configures sessions and passport.
// app.use(session({
//   secret: 'xsaster',
//   resave: true,
//   saveUninitialized: true,
// }));
// app.use(passport.initialize());
// app.use(passport.session());

