/**
 * Created by mouni on 4/30/2017.
 */

var mongoUrl = 'mongodb://avinash:avinash@ds155727.mlab.com:55727/user';
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

module.exports = {

    setUpdatePost: function (req, res) {

        console.log('data in update post' + req.body);
        MongoClient.connect(mongoUrl, function (err, db) {

            if (err) {
                res.status(400).json({
                    error: err
                });
            }

            insertDocument(db, req.body, function () {
                res.status(200).json({
                    result: 'success'
                });
            });

        });

        var insertDocument = function (db, data, callback) {
            console.log('into insert doc function in update post');
            var string = JSON.stringify(data);
            var objectValue = JSON.parse(string);
            var id = objectValue['post_id'];
            db.collection('post').update({ _id: ObjectId(id)}, data, function (err, result) {
                console.log('into db insertion');
                if (err) {
                    res.status(500).json({
                        error: err
                    });
                }
                callback();
            })
        }
    }
}
