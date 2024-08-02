
const express = require('express');
const mongoose = require('mongoose');
const router = require("./Route/UserRoutes");

const app = express();

//Middleware
(express()).use("/users",router);

mongoose.connect("mongodb+srv://keshanshavidu:Shavindu2000@shavindu9.1gh7s13.mongodb.net/?retryWrites=true&w=majority&appName=Shavindu9")
.then(()=> console.log("connected to Mongodb"))
.then(() => {
    (express()).listen(5000);
})
.catch((err)=> console.log((err)));