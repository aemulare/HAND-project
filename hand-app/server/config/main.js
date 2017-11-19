const path = require('path');

module.exports = {
  // The server application root path
  root: path.normalize(`${__dirname}/..`),

  // Current environment
  env: process.env.NODE_ENV || 'development',

  // Server port
  port: process.env.PORT || 8000,

  // Secret key for JWT signing and encryption
  secret: 'dxsaster'
};
