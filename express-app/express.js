// app.js
const express = require('express');
const app = express();
const port = 4567;

app.get('/', (req, res) => {
  res.send('Hello, Docker!');
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});