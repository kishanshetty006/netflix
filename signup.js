const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Create or open an SQLite database and define a table
const db = new sqlite3.Database('netflix.db', (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Connected to the Netflix database.');
    db.run(`
      CREATE TABLE IF NOT EXISTS netflix1 (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT,
        password TEXT
      )
    `);
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'form1.html'));
});

app.post('/signup', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.run('INSERT INTO netflix1 (username, password) VALUES (?, ?)', [username, password], (err) => {
    if (err) {
      console.error(err.message);
      res.send('Error occurred during signup.');
    } else {
      res.redirect('/form2.html');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
