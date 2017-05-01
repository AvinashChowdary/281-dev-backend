/**
 * Created by avinash on 4/29/17.
 */

var setUser = require("../routes/user-route");
var getUsers = require("../routes/user-route");
var getUserByID = require("../routes/user-route");
var setUserProfile = require("../routes/user-route");
var setUserProfileByID = require("../routes/user-route");
var setCreatePost = require("../routes/user-route");
var setUpdatePost = require("../routes/user-route");
var getProfileByID = require("../routes/user-route");
var createProject = require("../routes/user-route");
var updateProject = require("../routes/user-route");
var deleteProject = require("../routes/user-route");
var getAllProjects = require("../routes/user-route");
var createCustomer = require("../routes/user-route");
var updateCustomer = require("../routes/user-route");
<<<<<<< HEAD
var setDeletePost = require("../routes/user-route");
var getAllPosts = require("../routes/user-route");

=======
var deleteCustomer = require("../routes/user-route");
var getAllCustomers = require("../routes/user-route");
>>>>>>> 56615c949868e044ebfa1564da4838e5ff0c7580

module.exports = {
    registerRoutes: function(app) {
        app.post('/set_user', setUser);
        app.get('/get_users', getUsers);
        app.get('/get_user_by_id', getUserByID);
        app.post('/set_profile', setUserProfile);
        app.post('/set_profile_by_id', setUserProfileByID);
        app.post('/set_create_post', setCreatePost );
        app.post('/set_update_post', setUpdatePost);
        app.post('/get_profile_by_id', getProfileByID);
        app.post('/create_project', createProject);
        app.post('/update_project', updateProject);
        app.post('/delete_project', deleteProject);
        app.get('/get_all_projects', getAllProjects);
        app.post('/create_customer', createCustomer);
        app.post('/update_customer', updateCustomer);
<<<<<<< HEAD
        app.post('/set_delete_post', setDeletePost);
        app.post('/set_delete_post', setDeletePost);
        app.get('/get_all_posts', getAllPosts);
=======
        app.post('/delete_customer', deleteCustomer);
        app.get('/get_all_customers', getAllCustomers);
>>>>>>> 56615c949868e044ebfa1564da4838e5ff0c7580
        console.log("registered routes");
    }
};
