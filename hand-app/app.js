const express = require('express');
const path = require('path');

const app = express();


const PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.resolve(__dirname, 'views/sign-up'));
app.set('view engine', 'ejs');


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
