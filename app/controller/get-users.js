/**
 * Created by avinash on 4/30/17.
 */

var mongoUrl = 'mongodb://avinash:avinash@ds155727.mlab.com:55727/user';
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var JSONStream = require('JSONStream');

module.exports = {

    getUsers: function (req, res) {
        console.log("in get users");
        MongoClient.connect(mongoUrl, function (err, db) {
            assert.equal(null, err);
            getUsers(db, function () {
                db.close();
            });
        });

        var getUsers = function (db, callback) {
            var cursor = db.collection('user_list').find();
            cursor.toArray(function (err, doc) {
                assert.equal(err, null);
                res.contentType('application/json');
                res.write(JSON.stringify(doc));
                res.end();
            });

            callback();
        };

    }
};