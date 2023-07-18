const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('index', './index');

app.get('/', (req, res) => {
  const message = 'Hello, World!';
  res.render('index', { message });
});

app.listen(8080, () => {
  console.log('Server started on port 8080');
});