const express = require('express');
const config = require('./config/main');

const app = express();
// module.exports = require('./config/express')(app, config);

app.listen(config.port, () => {
  console.log(`Express server is running on port ${config.port}`);
});
