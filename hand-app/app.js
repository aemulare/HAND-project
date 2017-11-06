const express = require('express');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const env = require('dotenv').load();
const authRoute = require('./app/routes/auth.js');
const homeRoute = require('./app/routes/home.js');

const app = express();


const PORT = process.env.PORT || 3000;
authRoute(app);
homeRoute(app);

// Configures body-parser.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configures sessions and passport.
app.use(session({
  secret: 'xsaster',
  resave: true,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());


// Configures views.
app.set('views', path.join(__dirname, 'app', 'views'));
app.set('view engine', 'ejs');

// Configures public assets folder.
app.use(express.static(path.join(__dirname, 'public')));


app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});


app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Server is up and running on port ${PORT}`);
});
