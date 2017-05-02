/**
 * Created by avinash on 4/30/17.
 */

var mongoUrl = 'mongodb://avinash:avinash@ds155727.mlab.com:55727/user';
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
module.exports = {

    getUserByID: function (req, res) {
        console.log("in get user by id");
        MongoClient.connect(mongoUrl, function (err, db) {
            if (err) {
                console.log('into error of mongo');
                res.status(400).json({
                    error: err
                });
            }
            getUserbyId(req.param('id'), db, function () {
                db.close();
            });
        });

        var getUserbyId = function (id, db, callback) {
            var usersCollection = db.collection('user_list');
            usersCollection.findOne({id: id}, function (err, doc) {
                if (err) {
                    res.status(500).json({
                        error: err
                    });
                }
                res.contentType('application/json');
                res.write(JSON.stringify(doc));
                res.end();
                callback();
            });
        }
    }
};
