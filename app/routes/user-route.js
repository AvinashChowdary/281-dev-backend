/**
 * Created by avinash on 4/29/17.
 */

var router = require('express').Router();
var setUserController = require("../controller/set-user");
var getUsersController = require("../controller/get-users");
var getUserByIDController = require("../controller/get-user-by-id.js");
var setUserProfileController = require("../controller/set-user-profile.js");
var setUserProfileByIDController = require("../controller/set-user-profile-by-id.js");
var getUserProfileByIDController = require("../controller/get-user-profile-by-id.js");
var createProjectController = require("../controller/create-project.js");
var updateProjectController = require("../controller/update-project.js");
var deleteProjectController = require("../controller/delete-project.js");
var getAllProjects = require("../controller/get-all-projects.js");
var createCustomer = require("../controller/create-customer.js");

router.post("/set_user", setUserController.setUser);
router.get("/get_users", getUsersController.getUsers);
router.get("/get_user_by_id", getUserByIDController.getUserByID);
router.post("/set_profile", setUserProfileController.setUserProfile);
router.post("/set_profile_by_id", setUserProfileByIDController.setUserProfileById);
router.post("/get_profile_by_id", getUserProfileByIDController.getUserProfileByID);
router.post("/create_project", createProjectController.createProject);
router.post("/update_project", updateProjectController.updateProject);
router.post("/delete_project", deleteProjectController.deleteProject);
router.get("/get_all_projects", getAllProjects.getAllProjects);
router.post("/create_customer", createCustomer.createCustomer);

module.exports = router;