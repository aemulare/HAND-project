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


app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
