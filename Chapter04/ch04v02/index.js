const express = require('express');

const app = express();

app.delete('/', (req, res) => {
  res.status(200).send('Hello World');
});

app.get('/about', (req, res) => {
  res.send('About Us');
})


app.listen(3000, () => {console.log('server is runnng on port 3000!');})