/**
 * Created by avinash on 4/29/17.
 */

var setUser = require("../routes/user-route");
var getUsers = require("../routes/user-route");
var getUserByID = require("../routes/user-route");
var setUserProfile = require("../routes/user-route");
var setUserProfileByID = require("../routes/user-route");

module.exports = {
    registerRoutes: function(app) {
        app.post('/set_user', setUser);
        app.get('/get_users', getUsers);
        app.get('/get_user_by_id', getUserByID);
        app.post('/set_profile', setUserProfile);
        app.post('/set_profile_by_id', setUserProfileByID);
        console.log("registered routes");
    }
};
