var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://uaykdeachphmq477qihr:oEYmQyGTZwet69srUPsDPlJMy4irOG@bkl4kp4n4z4ybkhhavrf-postgresql.services.clever-cloud.com:50013/bkl4kp4n4z4ybkhhavrf';
var db = pgp(connectionString);

// add query functions

module.exports = {
//  getAllPuppies: getAllPuppies,
//  getSinglePuppy: getSinglePuppy,
///  createPuppy: createPuppy,
//  updatePuppy: updatePuppy,
//  removePuppy: removePuppy
  getAllPuppies: getAllPuppies
};

function getAllPuppies(req, res, next) {
  db.any('select * from pups')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL puppies'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}
