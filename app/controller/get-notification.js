/**
 * Created by mouni on 4/30/2017.
 */

var mongoUrl = 'mongodb://avinash:avinash@ds155727.mlab.com:55727/user';
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var JSONStream = require('JSONStream');

module.exports = {

    getNotification: function (req, res) {
        console.log("in get notification");
        MongoClient.connect(mongoUrl, function (err, db) {
            if (err) {
                console.log('into error of mongo');
                res.status(400).json({
                    error: err
                });
            }
            getNotifications(db, function () {
                db.close();
            });
        });

        var getNotifications = function (db, callback) {
            console.log("in db querying");
            var cursor = db.collection('notification').find();
            cursor.toArray(function (err, doc) {
                if (err) {
                    res.status(500).json({
                        error: err
                    });
                }
                console.log("no error in obtaining data from cursor");
                res.contentType('application/json');
                res.write(JSON.stringify(doc));
                res.end();
                console.log(res.toString());
            });

            callback();
        };

    }
};
