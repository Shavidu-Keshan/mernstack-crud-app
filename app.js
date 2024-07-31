//pasworddb=kgvIiaf0sg7E6vWW
const express = require('express');
const mongoose = require('mongoose');

const app = express();

//Middleware
app.use("/", (req, res, next) => {
    res.send("It is working");
});

mongoose.connect("mongodb+srv://admin:kgvIiaf0sg7E6vWW@cluster0.3htd30t.mongodb.net/")
.then(()=> console.log("connected to Mongodb"))
.then(() => {
    app.listen(5000);
})
.catch((err)=> console.log((err)))