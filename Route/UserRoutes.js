const express = require("express");
const router = express.Router();

//insert model
const User = require("../Model/UserModel");
//insert user controller
const UserController = require("../controllers/UserControllers");

router.get("/",UserController.getAllUsers);
router.post("/",UserController.addUsers);


//export
module.exports = router;
