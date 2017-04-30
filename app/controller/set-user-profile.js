/**
 * Created by avinash on 4/29/17.
 */

var mongoUrl = 'mongodb://avinash:avinash@ds155727.mlab.com:55727/user';
var MongoClient = require('mongodb').MongoClient;

module.exports = {

    setUserProfile: function(req, res) {

        console.log('data'+ req.body.Key);
        MongoClient.connect(mongoUrl, function (err, db) {

            if (err) {
                console.log('into error of mongo');
                res.status(400).json({
                    message: 'Connection to database failed !!',
                    error: err
                });
            }

            insertDocument(db, req.body, function () {
                console.log('into insert doc');
                res.status(200).json({
                    message: 'User added to DB!!'
                });
            });

        });

        var insertDocument = function (db, data, callback) {
            console.log('into insert doc function');
            db.collection('user_profile').insertOne(data, function (err, result) {
                console.log('into db insertion');
                if (err) {
                    res.status(500).json({
                        message: 'Failed to add in DB!!'
                    });
                }
                callback();
            })
        }
    }
};
