/**
 * Created by mouni on 4/30/2017.
 */

var mongoUrl = 'mongodb://avinash:avinash@ds155727.mlab.com:55727/user';
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var JSONStream = require('JSONStream');

module.exports = {

    getAllPosts: function (req, res) {
        console.log("in get users");
        MongoClient.connect(mongoUrl, function (err, db) {
            if (err) {
                console.log('into error of mongo');
                res.status(400).json({
                    error: err
                });
            }
            getUsers(db, req.body, function () {
                db.close();
            });
        });

        var getUsers = function (db, body, callback) {
            var string = JSON.stringify(body);
            var objectValue = JSON.parse(string);
            var cursor = db.collection('post').find();
            cursor.toArray(function (err, doc) {
                if (err) {
                    res.status(500).json({
                        error: err
                    });
                } else {
                    res.contentType('application/json');
                    res.write(JSON.stringify(doc));
                    res.end();
                }
            });

            callback();
        };

    }
};