/**
 * Created by mouni on 4/30/2017.
 */

var mongoUrl = 'mongodb://avinash:avinash@ds155727.mlab.com:55727/user';
var MongoClient = require('mongodb').MongoClient;

module.exports = {

    setUpdatePost: function (req, res) {

        console.log('data in update post' + req.body);
        MongoClient.connect(mongoUrl, function (err, db) {

            if (err) {
                res.status(400).json({
                    message: 'Connection to database failed !!',
                    error: err
                });
            }

            insertDocument(db, req.body, function () {
                res.status(200).json({
                    message: 'User added to DB!!'
                });
            });

        });

        var insertDocument = function (db, data, callback) {
            console.log('into insert doc function in update post');
            db.collection('post').insertOne(data, function (err, result) {
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
}
