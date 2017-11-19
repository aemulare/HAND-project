const express = require('express');
const config = require('./config/main');

const app = express();
module.exports = require('./config/middleware')(app);

app.listen(config.port, () => {
  console.log(`Express server is running on port ${config.port}`);
});
