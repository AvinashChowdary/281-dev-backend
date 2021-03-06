/**
 * Created by avinash on 4/29/17.
 */

var router = require('express').Router();
var getUsersController = require("../controller/get-users");
var getUserByIDController = require("../controller/get-user-by-id.js");
var setCreatePostController = require("../controller/set-create-post");
var setUpdatePostController = require("../controller/set-update-post");
var setUserProfileByIDController = require("../controller/set-user-profile-by-id.js");
var getUserProfileByIDController = require("../controller/get-user-profile-by-id.js");
var createProjectController = require("../controller/create-project.js");
var updateProjectController = require("../controller/update-project.js");
var deleteProjectController = require("../controller/delete-project.js");
var getAllProjects = require("../controller/get-all-projects.js");
var createCustomer = require("../controller/create-customer.js");
var updateCustomer = require("../controller/update-customer.js");
var setDeletePostController = require("../controller/set-delete-post");
var getAllPostsController = require("../controller/get-all-posts");
var deleteCustomer = require("../controller/delete-customer.js");
var getAllCustomers = require("../controller/get-all-customers.js");
var setNotificationController = require("../controller/set-notification");
var getNotificationController = require("../controller/get-notification");
var loginController = require("../controller/login");
var signUpController = require("../controller/signup");
var setChatDataController = require("../controller/set-chat-data");
var getChatDataController = require("../controller/get-chat-data");
var customerLoginController = require("../controller/customerLogin");
var getProfileByIDController = require("../controller/get-project-by-id");


router.get("/get_users", getUsersController.getUsers);
router.get("/get_user_by_id", getUserByIDController.getUserByID);
router.post("/set_profile_by_id", setUserProfileByIDController.setUserProfileById);
router.post("/set_create_post", setCreatePostController.setCreatePost);
router.post("/set_update_post", setUpdatePostController.setUpdatePost);
router.post("/get_profile_by_id", getUserProfileByIDController.getUserProfileByID);
router.post("/create_project", createProjectController.createProject);
router.post("/update_project", updateProjectController.updateProject);
router.post("/delete_project", deleteProjectController.deleteProject);
router.post("/get_all_projects", getAllProjects.getAllProjects);
router.post("/create_customer", createCustomer.createCustomer);
router.post("/update_customer", updateCustomer.updateCustomer);
router.post("/set_delete_post", setDeletePostController.setDeletePost);
router.post("/get_all_posts", getAllPostsController.getAllPosts);
router.post("/delete_customer", deleteCustomer.deleteCustomer);
router.post("/get_all_customers", getAllCustomers.getCustomers);
router.post("/set_Notification", setNotificationController.setNotification);
router.get("/get_Notification", getNotificationController.getNotification);
router.post("/login", loginController.login);
router.post("/signup", signUpController.signup);
router.post("/set_chat_data", setChatDataController.setChatData);
router.post("/get_chat_data", getChatDataController.getChatData);
router.post("/customerLogin", customerLoginController.customerLogin);
router.post ("/get_project_by_id",getProfileByIDController.getProjectByID);


module.exports = router;