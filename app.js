
const express = require('express');
const mongoose = require('mongoose');
const router = require("./Route/UserRoutes");

const app = express();



//Middleware
app.use("/users",router);
app.use(express.json());

mongoose.connect("mongodb+srv://keshanshavidu:Shavindu2000@shavindu9.1gh7s13.mongodb.net/?retryWrites=true&w=majority&appName=Shavindu9")
.then(()=> console.log("connected to Mongodb"))
.then(() => {
    app.listen(5000);
})
.catch((err)=> console.log((err)));
