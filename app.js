//pasworddb=kgvIiaf0sg7E6vWW
const express = require('express');
const mongoose = require('mongoose');

const app = express();

//Middleware
app.use("/", (req, res, next) => {
    res.send("It is working");
});
