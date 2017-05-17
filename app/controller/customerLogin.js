/**
 * Created by mouni on 5/16/2017.
 */

var mongoUrl = 'mongodb://avinash:avinash@ds155727.mlab.com:55727/user';
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

module.exports = {

    customerLogin: function(req, res) {

        MongoClient.connect(mongoUrl, function (err, db) {

            if (err) {
                console.log('into error of mongo');
                res.status(400).json({
                    error: err
                });
            }

            insertDocument(db, req.body, function (result) {
                console.log('into insert doc');
                res.setHeader('Content-Type', 'application/json');
                res.contentType('application/json');
                res.header('Access-Control-Allow-Origin', '*');
                if(result) {
                    res.status(200).json({
                        success: result
                    });
                } else {
                    res.status(401).json({
                        error: 'unauthorized'
                    });
                }

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
            db.collection('customer').findOne({$and:[{ 'username':username},{'password':password}]}, function(err, result) {
                if (err) {
                    res.status(500).json({
                        error : err
                    });
                } else {
                    callback(result);
                }
            });
        }
    }
};