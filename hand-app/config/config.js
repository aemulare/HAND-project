const path = require('path');

const rootPath = path.normalize(`${__dirname}/..`);
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    app: { name: 'hand-app' },
    port: process.env.PORT || 3000,
    db: 'postgres://localhost/hand_development',
  },
  test: {
    root: rootPath,
    app: { name: 'hand-app' },
    port: process.env.PORT || 3000,
    db: 'postgres://localhost/hand_test',
  },
  production: {
    root: rootPath,
    app: { name: 'hand-app' },
    port: process.env.PORT || 3000,
    db: 'postgres://localhost/hand_production',
  },
};

module.exports = config[env];
