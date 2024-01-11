var express = require('express');

var app = express();

const PORT = process.env.SERVER_PORT;

var router = express.Router();

var db = require('../queries');


router.get('/api/puppies', db.getAllPuppies);
router.get('/api/puppies/:id', db.getSinglePuppy);
router.post('/api/puppies', db.createPuppy);
router.put('/api/puppies/:id', db.updatePuppy);
router.delete('/api/puppies/:id', db.removePuppy);


module.exports = router;

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
