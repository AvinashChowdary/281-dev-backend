/**
 * Created by avinash on 4/30/17.
 */

var mongoUrl = 'mongodb://avinash:avinash@ds155727.mlab.com:55727/user';
var MongoClient = require('mongodb').MongoClient;

module.exports = {

    createCustomer: function(req, res) {

        console.log('data'+ req.body.Key);
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
                res.status(200).json({
                    tester_id: result._id
                });
            });

        });

        var insertDocument = function (db, data, callback) {
            console.log('into insert doc function');
            db.collection('customer').insertOne(data, function (err) {
                console.log('into db insertion');
                if (err) {
                    res.status(500).json({
                        error: err
                    });
                }
                callback(data);
            })
        }
    }
};