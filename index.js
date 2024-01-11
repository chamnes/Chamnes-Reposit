var express = require('express');

var app = express();

const PORT = process.env.SERVER_PORT;

const pgp = require('pg-promise')(/* options */)
const db = pgp('postgres://uaykdeachphmq477qihr:oEYmQyGTZwet69srUPsDPlJMy4irOG@bkl4kp4n4z4ybkhhavrf-postgresql.services.clever-cloud.com:50013/bkl4kp4n4z4ybkhhavrf')

db.one('SELECT $1 AS value', 123)
  .then((data) => {
    console.log('DATA:', data.value)
  })
  .catch((error) => {
    console.log('ERROR:', error)
  })

const menus = [
  { name: 'Vanilla', description: 'A plain vanilla ice cream' },
  { name: 'Choco Chips', description: 'A chocolate chips ice cream' },
];

app.get('/', function (req, res) {
  res.send('Simple Web Application is UP');
});

app.get('/menu', (req, res, next) => {
  res.json({
    data: menus,
  });
});

app.listen(PORT, function () {
    console.log('Simple Web Application running on port ' + PORT);
});
