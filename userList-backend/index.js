const express = require('express');
const sqlite3 = require('sqlite3');
const fs = require('fs');
const app = express();
const port = 3200;

// eslint-disable-next-line no-unused-vars
const db = new sqlite3.Database('../localDB', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.log(error.message);
  }
  console.log('Connected to the local users list DB.');
});

const getAllUsers = fs.readFileSync('../selectall.sql').toString();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/all', (req, res) =>{
  db.all(getAllUsers, [], (err, rows) => {
    if (err) {
      console.log(error.message);
    }
    res.send(rows);
  });
});

app.listen(port, () => {
  console.log(`Example app listening to port ${port}!`);
});
