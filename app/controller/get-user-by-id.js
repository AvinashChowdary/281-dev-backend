/**
 * Created by avinash on 4/6/17.
 */

var mongoUrl = 'mongodb://avinash:avinash@ds155727.mlab.com:55727/user';
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
module.exports = {

    getUserByID: function (req, res) {
        MongoClient.connect(mongoUrl, function (err, db) {
            assert.equal(null, err);
            getUserbyId(req.param('id'), db, function () {
                db.close();
            });
        });

        var getUserbyId = function (id, db, callback) {
            var usersCollection = db.collection('user_list');
            usersCollection.findOne({id: id}, function (err, doc) {
                res.contentType('application/json');
                res.write(JSON.stringify(doc));
                res.end();
                callback();
            });
        }
    }
};
