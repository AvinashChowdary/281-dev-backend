/**
 * Created by avinash on 4/30/17.
 */

var mongoUrl = 'mongodb://avinash:avinash@ds155727.mlab.com:55727/user';
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

module.exports = {

    deleteCustomer: function (req, res) {

        MongoClient.connect(mongoUrl, function (err, db) {

            if (err) {
                console.log('into error of mongo');
                res.status(400).json({
                    error: err
                });
            }

            insertDocument(db, req.body, function () {
                console.log('into insert doc');
                res.status(200).json({
                    result: 'success'
                });
            });

        });

        var insertDocument = function (db, data, callback) {
            console.log('into insert doc function');
            console.log(data);
            var string = JSON.stringify(data);
            var objectValue = JSON.parse(string);
            var id = objectValue['customer_id'];
            console.log(id);

            var collection = db.collection('customer');

            collection.deleteOne({_id: ObjectId(id)}, function (err, result) {
                if (err) {
                    res.status(500).json({
                        error: err
                    });
                }
                db.close();
            });
            callback();
        }
    }
};