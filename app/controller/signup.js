/**
 * Created by avinash on 5/1/17.
 */

var mongoUrl = 'mongodb://avinash:avinash@ds155727.mlab.com:55727/user';
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

module.exports = {

    signup: function(req, res) {

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
                    result:'success'
                });
            });

        });

        var insertDocument = function (db, data, callback) {
            console.log('into insert doc function');
            console.log(data);
            JSON.stringify(data);
            db.collection('user_list').insertOne(data, function (err, result) {
                console.log('into db insertion');
                if (err) {
                    res.status(500).json({
                        message: 'Failed to add in DB!!'
                    });
                }
                callback(result);
            });
        }
    }
};