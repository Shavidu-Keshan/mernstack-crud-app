//pasworddb=I7FPFrpGfOUpqeyT
const express = require('express');
const mongoose = require('mongoose');

const app = express();

//Middleware
app.use("/", (req, res, next) => {
    res.send("It is working");
});
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});

const uri = `mongodb+srv://keshanshavidu:Shavindu2000@shavindu9.1gh7s13.mongodb.net/?retryWrites=true&w=majority&appName=Shavindu9`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB"))

.catch((err) => console.log(err));