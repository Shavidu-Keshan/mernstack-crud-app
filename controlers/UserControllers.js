const User = require("../Model/UserModel");

const getAllUsers = async(req,res,next) => {
    let Users;

    try{
        Users = await User.find();
    }catch(err){
        console.log(err);
    }
    //

}