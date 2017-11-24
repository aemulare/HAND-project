const logger = require('morgan');
const bodyParser = require('body-parser');

module.exports = (app) => {
  // Logger middleware
  app.use(logger('dev'));

  // Body parser middleware
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  // Enable CORS from client-side
  // Cross-Origin Resource Sharing (CORS)
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
  });
};
