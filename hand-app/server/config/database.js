// Database configuration file

const configure = settings =>
  Object.assign({
      host: 'localhost',
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      dialect: 'postgres',
      migrationStorageTableName: 'db_migrations'
    },
    settings
  );


module.exports = {
  development: configure({
    database: 'hand_dev'
  }),
  test: configure({
    database: 'hand_test'
  }),
  production: configure({
    database: 'hand_prod'
  })
};