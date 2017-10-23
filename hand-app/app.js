const express = require('express');

const app = express();


const PORT = process.env.PORT || 3000;
app.use((req, res) => {
  res.end('Welcome to HAND Project!');
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
