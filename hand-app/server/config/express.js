const express = require('express');
const passport = require('./passport');

module.exports = (app, config) => {
  const env = process.env.NODE_ENV || 'development';
  /* eslint-disable no-param-reassign, eqeqeq */
  app.locals.ENV = env;
  app.locals.ENV_DEVELOPMENT = env == 'development';
  /* eslint-enable no-param-reassign, eqeqeq */

  app.use(cookieParser());
  app.use(express.static(`${config.root}/public`));

  // Configures sessions and passport.
  app.use(session({
    secret: 'xsaster',
    resave: true,
    saveUninitialized: true,
  }));
  app.use(passport.initialize());
  app.use(passport.session());


  const controllers = glob.sync(`${config.root}/app/controllers/*.js`);
  controllers.forEach((controller) => {
    require(controller)(app); // eslint-disable-line global-require, import/no-dynamic-require
  });

  app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  if (app.get('env') === 'development') {
    app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: err,
        title: 'error',
      });
    });
  }

  app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: {},
      title: 'error',
    });
  });

  return app;
};
