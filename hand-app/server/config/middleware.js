const logger = require('morgan');

module.exports = (app) => {
  // Logger middleware
  app.use(logger('dev'));

  // Body parser middleware
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
};
