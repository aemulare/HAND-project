const express = require('express');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');

const app = express();


const PORT = process.env.PORT || 3000;

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
app.set('views', path.resolve(__dirname, 'views/sign-up'));
app.set('view engine', 'ejs');

// Configures public assets folder.
app.use(express.static(path.join(__dirname, 'public')));

app.get('/signup', (req, res) => {
  res.render('sign-up');
});

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
