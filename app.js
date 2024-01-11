var express = require('express');

var app = express();

const PORT = process.env.SERVER_PORT;



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
