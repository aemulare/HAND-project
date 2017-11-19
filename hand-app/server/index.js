const express = require('express');
const config = require('./config/main');
const router = require('./router');

const app = express();
module.exports = require('./config/middleware')(app);

router(app);

app.listen(config.port, () => {
  console.log(`Express server is running on port ${config.port}`);
});
