const path = require('path');

const rootPath = path.normalize(`${__dirname}/..`);
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    app: { name: 'hand-app' },
    port: process.env.PORT || 8000,
  },
  test: {
    root: rootPath,
    app: { name: 'hand-app' },
    port: process.env.PORT || 8000,
  },
  production: {
    root: rootPath,
    app: { name: 'hand-app' },
    port: process.env.PORT || 8000,
  },
};

module.exports = config[env];
