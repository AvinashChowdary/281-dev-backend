/**
 * Created by mouni on 5/16/2017.
 */


var mongoUrl = 'mongodb://avinash:avinash@ds155727.mlab.com:55727/user';
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var JSONStream = require('JSONStream');
var ObjectId = require('mongodb').ObjectID;


module.exports = {

    getProjectByID: function (req, res) {
        console.log("in get projects");
        MongoClient.connect(mongoUrl, function (err, db) {
            if (err) {
                console.log('into error of mongo');
                res.status(400).json({
                    error: err
                });
            }
            getUsers(db, req.body, function () {
                db.close();
            });
        });

        var getUsers = function (db, body, callback) {
            var string = JSON.stringify(body);
            var objectValue = JSON.parse(string);
            var mgr_id = objectValue['manager_id'];
            var proj_id = objectValue['project_id'];
            var cursor;
            if(mgr_id && proj_id) {
                cursor = db.collection('project').find({$and: [{'manager_id': mgr_id}, {'project_id': proj_id}]});
            } else {
                console.log('into error of mongo');
                res.status(400).json({
                    error: "request object should contain both manager ID and project ID"
                });
            }
            cursor.toArray(function (err, doc) {
                if (err) {
                    res.status(500).json({
                        error: err
                    });
                } else {
                    res.contentType('application/json');
                    res.write(JSON.stringify(doc));
                    res.end();
                }
            });

            callback();
        };

    }
};