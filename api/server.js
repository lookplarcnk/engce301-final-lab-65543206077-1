const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require("body-parser");
const port = 3080;

// place holder for the data
const users = [
  {
    firstName: "Kaweewat",
    lastName: "Kansupattanakul",
    email: "kaweeewat_ka65@live.rmutl.ac.th",
    position: "developer"
  },
  {
    firstName: "Ratchaneekorn",
    lastName: "Chuadee",
    email: "ratchaneekorn_ch65@live.rmutl.ac.th",
    position: "system analyst"
  },
  {
    firstName: "Aphinan",
    lastName: "Hongpong",
    email: "aphinan_ho65@live.rmutl.ac.th",
    position: "tester"
  }
];

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../my-app/build')));

app.get('/api/users', (req, res) => {
  console.log('api/users called!')
  res.json(users);
});

app.post('/api/user', (req, res) => {
  const user = req.body.user;
  console.log('Adding user:::::', user);
  users.push(user);
  res.json("user addedd");
});

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../my-app/build/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});
