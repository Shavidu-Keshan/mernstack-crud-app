const express = require("express");
const router = express.Router();

//insert models
const User = require("../Model/UserModel");
//insert user controllers
const UserController = require("../controllers/UserControllers");

router.get("/",UserController.getAllUsers);
router.post("/",UserController.addUsers);
router.get("/:id",UserController.getById);
router.get("/:id",UserController.updateUser);

//exports
module.exports = router;
