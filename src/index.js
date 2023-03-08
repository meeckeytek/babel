import express from 'express';
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  // "start": "node --exec npx babel-node src/index",
  console.log('Example app listening on port 3000!');
});
