'use strict';

const express = require('express');

const PORT = 8000;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get('/name', (req, res) => {
  var name = req.query.name

  if (name != "") {
    res.send(`Hello ${name}, it's nice to meet you.`);
  } else {
    res.send('Please enter a name')
  }

});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);