const express = require("express");
const router = express.Router();

//insert model
const User = require("../Model/UserModel");
//insert user controller
const UserController = require("../controllers/UserControllers");

router.get("/",UserController.getAllUsers);
router.post("/",UserController.addUsers);
router.get("/:id",UserController.getById);

//export
module.exports = router;
