const express = require('express');
const app = express();


const PORT = process.env.PORT || 3000;
app.use((req, res) => {
    res.end(`Server is up and running on port ${PORT}`);
});

app.listen(PORT);