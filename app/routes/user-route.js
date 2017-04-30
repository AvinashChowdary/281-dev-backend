/**
 * Created by avinash on 4/29/17.
 */

var router = require('express').Router();
var setUserController = require("../controller/set-user");
var getUsersController = require("../controller/get-users");
var getUserByIDController = require("../controller/get-user-by-id.js");
var setUserProfileController = require("../controller/set-user-profile.js");
var setUserProfileByIDController = require("../controller/set-user-profile-by-id")

router.post("/set_user", setUserController.setUser);
router.get("/get_users", getUsersController.getUsers);
router.get("/get_user_by_id", getUserByIDController.getUserByID);
router.post("/set_profile", setUserProfileController.setUserProfile);
router.post("/set_profile_by_id", setUserProfileByIDController.setUserProfileById);

module.exports = router;