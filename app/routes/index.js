/**
 * Created by avinash on 4/29/17.
 */

var getUsers = require("../routes/user-route");
var getUserByID = require("../routes/user-route");
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
var setDeletePost = require("../routes/user-route");
var getAllPosts = require("../routes/user-route");
var deleteCustomer = require("../routes/user-route");
var getAllCustomers = require("../routes/user-route");
var setNotification = require("../routes/user-route");
var getNotification = require("../routes/user-route");
var login = require("../routes/user-route");
var signup = require("../routes/user-route");
var getChatData = require("../routes/user-route");
var setChatData = require("../routes/user-route");

module.exports = {
    registerRoutes: function(app) {
        app.get('/get_users', getUsers);
        app.get('/get_user_by_id', getUserByID);
        app.post('/set_profile_by_id', setUserProfileByID);
        app.post('/set_create_post', setCreatePost );
        app.post('/set_update_post', setUpdatePost);
        app.post('/get_profile_by_id', getProfileByID);
        app.post('/create_project', createProject);
        app.post('/update_project', updateProject);
        app.post('/delete_project', deleteProject);
        app.post('/get_all_projects', getAllProjects);
        app.post('/create_customer', createCustomer);
        app.post('/update_customer', updateCustomer);
        app.post('/set_delete_post', setDeletePost);
        app.post('/get_all_posts', getAllPosts);
        app.post('/delete_customer', deleteCustomer);
        app.post('/get_all_customers', getAllCustomers);
        app.post('/set_Notification', setNotification);
        app.get('/get_Notification', getNotification);
        app.post('/login', login);
        app.post('/signup', signup);
        app.post('/get_chat_data', getChatData);
        app.post('/set_chat_data', setChatData);
        console.log("registered routes");
    }
};
