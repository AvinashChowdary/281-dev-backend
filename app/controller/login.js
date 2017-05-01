/**
 * Created by avinash on 5/1/17.
 */

var mongoUrl = 'mongodb://avinash:avinash@ds155727.mlab.com:55727/user';
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

module.exports = {

    login: function(req, res) {

        MongoClient.connect(mongoUrl, function (err, db) {

            if (err) {
                console.log('into error of mongo');
                res.status(400).json({
                    message: 'Connection to database failed !!',
                    error: err
                });
            }

            insertDocument(db, req.body, function (result) {
                console.log('into insert doc');
                res.setHeader('Content-Type', 'application/json');
                res.contentType('application/json');
                res.header('Access-Control-Allow-Origin', '*');
                res.status(200).json({
                    access_token: result._id
                });
            });

        });

        var insertDocument = function (db, data, callback) {
            console.log('into insert doc function');
            console.log(data);
            var string = JSON.stringify(data);
            var objectValue = JSON.parse(string);
            var username = objectValue['username'];
            var password = objectValue['password'];
            console.log(username);
            db.collection('user_list').findOne({$and:[{ 'username':username},{'password':password}]}, function(err, result) {
                if (err) {
                    res.status(500).json({
                        message: 'Failed to add in DB!!'
                    });
                } else {
                    callback(result);
                }
            });
        }
    }
};